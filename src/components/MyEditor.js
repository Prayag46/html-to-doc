/**
 * @description React wangEditor usage
 * @author wangfupeng
 */

 import React, { useState, useEffect } from "react";
 import "@wangeditor/editor/dist/css/style.css";
 import { Editor } from "@wangeditor/editor-for-react";
//  import { Editor, Toolbar } from "@wangeditor/editor-for-react";
// import html2pdf from "html2pdf.js";
 import { asBlob } from "html-docx-js-typescript";
 import { saveAs } from "file-saver";
 
 function MyEditor() {
   const [editor, setEditor] = useState(null);
   const [html, setHtml] = useState("<p>Loading</p>");
 
   useEffect(() => {
     setTimeout(() => {
       setHtml(
         '<h1 style="text-align: center;">EasyAspataal</h1><h2>Name of the Patient: _____________</h2><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p><br /><p>Age: ____</p>'
       );
     }, 1500);
   }, []);
 
  //  const toolbarConfig = {};
   const editorConfig = {
     placeholder: "请输入内容..."
   };
 
   // 及时销毁 editor
   useEffect(() => {
     return () => {
       if (editor == null) return;
       editor.destroy();
       setEditor(null);
     };
   }, [editor]);
 
  //  function insertText() {
  //    if (editor == null) return;
  //    editor.insertText(" hello ");
  //  }
  //  function printText() {
  //    if (editor == null) return;
  //    console.log(editor.getText());
  //  }
  //  function printHtml() {
  //    if (editor == null) return;
  //    console.log(editor.getHtml());
  //  }
  //  function printJSON() {
  //    if (editor == null) return;
  //    console.log(editor.children);
  //  }
  //  function getHeaders() {
  //    if (editor == null) return;
  //    const headers = editor.getElemsByTypePrefix("header");
  //    console.log(headers);
  //  }
  //  const exportPdf = () => {
  //    // 导出配置
  //    const opt = {
  //      margin: 1,
  //      filename: "test",
  //      image: { type: "jpeg", quality: 1 },
  //      html2canvas: { scale: 2, useCORS: true },
  //      jsPDF: { unit: "in", format: "letter", orientation: "portrait" }
  //    };
  //    html2pdf().set(opt).from(editor.getHtml()).save();
  //  };
 
   const saveDocx = () => {
     asBlob(editor.getHtml()).then((data) => {
       saveAs(data, "file.docx");
     });
   };
 
   return (
     <>
       <div>
         {/* <button onClick={insertText}>insert text</button>
         <button onClick={printText}>print text</button>
         <button onClick={printHtml}>print html</button>
         <button onClick={printJSON}>print json</button>
         <button onClick={getHeaders}>get header</button>
         <button onClick={exportPdf}>export pdf</button> */}
         <button onClick={saveDocx}>export word</button>
       </div>
 
       <div style={{ border: "1px solid #ccc", zIndex: 100, marginTop: "15px" }}>
         {/* <Toolbar
           editor={editor}
           defaultConfig={toolbarConfig}
           mode="default"
           style={{ borderBottom: "1px solid #ccc" }}
         /> */}
         <Editor
           id="editor1"
           defaultConfig={editorConfig}
           value={html}
           onCreated={setEditor}
           onChange={(editor) => setHtml(editor.getHtml())}
           mode="default"
         />
       </div>
       {/* <div style={{ marginTop: "15px" }}>{html}</div> */}
     </>
   );
 }
 
 export default MyEditor;
 
