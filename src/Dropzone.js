import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import XLSX from "xlsx";
import "./dropzone.css";

const Dropzone = () => {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = () => {
        const data = reader.result;
        const workbook = XLSX.read(data, {
          type: "binary"
        });

        workbook.SheetNames.forEach(sheetName => {
          let rows = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName], {
            header: 1,
            raw: false
          });

          let cols = rows[1]
            .map((x, index) => (x === "Total Chargeable %" ? index : undefined))
            .filter(Boolean)
            .map(y => ({ period: rows[0][y], colNum: y }));

          console.log(cols);

          rows = rows.filter(
            row =>
              !row.includes("Total") &&
              row.includes("OVR") &&
              row.includes("Service Delivery")
          );

          console.log(rows);

          const people = rows.map(x => {
            let person = { name: x[3] };
            cols.forEach(
              y => (person = { ...person, [y.period]: x[y.colNum] })
            );
            return person;
          });

          console.log(people);
        });
      };
      reader.readAsBinaryString(file);
    });
  }, []);
  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps({ className: "dropzone" })}>
      <input {...getInputProps()} />
      <p>Drag 'n' drop some files here, or click to select files</p>
    </div>
  );
};

export default Dropzone;
