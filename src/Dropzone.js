import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./dropzone.css";
import XLSX from "xlsx";

// const Dropzone = props => {
//   const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

//   const files = acceptedFiles.map(file => (
//     <li key={file.path}>
//       {file.path} - {file.size} bytes
//     </li>
//   ));

//   return (
//     <section>
//       <div {...getRootProps({ className: "dropzone" })}>
//         <input {...getInputProps()} />
//         <p>Drag 'n' drop some files here, or click to select files</p>
//       </div>
//       <aside>
//         <h4>Files</h4>
//         <ul>{files}</ul>
//       </aside>
//     </section>
//   );
// };

function Dropzone() {
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach(file => {
      const reader = new FileReader();

      reader.onabort = () => console.log("file reading was aborted");
      reader.onerror = () => console.log("file reading has failed");
      reader.onload = e => {
        // Do whatever you want with the file contents
        // const data = reader.result;
        var data = e.target.result;
        // console.log(binaryStr);

        var workbook = XLSX.read(data, {
          type: "binary"
        });

        workbook.SheetNames.forEach(function(sheetName) {
          // Here is your object
          var allRows = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheetName]
          );
          console.log(allRows);

          const allNumOnes = allRows.map(row => row.num1);
          console.log(allNumOnes);
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
}

export default Dropzone;
