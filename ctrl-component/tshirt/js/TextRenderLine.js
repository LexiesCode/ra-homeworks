const TextRenderLine = ({value, onChange}) => {

    const onEnterText = (e) => {
        const text = e.currentTarget.value.replace(/[^a-zA-Z\s]/gi, '').toLowerCase();
        onChange(text);
    };

    return (
        <div className="type-text">
            <textarea 
                name="text" 
                id="font-text" 
                cols="30" 
                rows="2" 
                placeholder="Введите текст для футболки"
                value={value}
                onChange={onEnterText}
                >
           </textarea>
        </div>
    );
}