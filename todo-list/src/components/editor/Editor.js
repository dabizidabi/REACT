import MDEditor from '@uiw/react-md-editor';


export default function Editor({getCurrentTask, updateTask}) {
    return (
        <div className="container">
        <MDEditor
            value={getCurrentTask.text}
            onChange={(e) => updateTask(e, getCurrentTask.id)}
        />
        </div>
    );
}