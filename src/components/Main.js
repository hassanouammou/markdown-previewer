import dedent from "dedent";
import { useState } from "react";
import Markdown from "react-markdown";

function Main({editorTabRef, previewTabRef, lineRef}) {
    const [markdownTextInput, setMarkdownTextInput] = useState("# Happy writing!");
    function loadPreview(event) {
        setMarkdownTextInput(event.target.value);
    }
    return(
        <main>
            <section id="editor-tab" className="tab" ref={editorTabRef}>
                <span className="tab-title">EDITOR</span>
                <textarea id="editor" onChange={loadPreview} value={markdownTextInput} />
            </section>
            <hr  ref={lineRef}/>
            <section id="preview-tab" className="tab" ref={previewTabRef}>
                <span className="tab-title">PREVIEW</span>
                <div id="preview"><Markdown>{markdownTextInput}</Markdown></div>
            </section>
        </main>
    );
}

export default Main;