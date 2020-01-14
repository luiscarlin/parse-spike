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
          const allRows = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheetName]
          );
          const allNumOnes = allRows.map(row => row.num1);
          const sum = allNumOnes.reduce(
            (previous, current) => previous + current
          );
          const avg = sum / allNumOnes.length;
          console.log(avg);
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
