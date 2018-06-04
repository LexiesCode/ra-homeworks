const FontSelector = ({fonts, selectedFont, onSelect}) => {
    
    const onSelectFont = (e) => {
        onSelect(fonts.find(font => font.name === e.currentTarget.value));
    }

    return (
        <div className="font-picker">
            {fonts.map((font, index) => {
                return (
                    <div className="grid center font-item">
                        <input 
                            type="radio" 
                            name="font" 
                            value={font.name} 
                            id={font.name}
                            onChange={onSelectFont}
                        />
                        <label htmlFor={font.name} className="grid-1">
                        <PictureFont 
                            text={'abc'} 
                            path={font.path}
                        />
                        </label>
                    </div>
                );
            })}
        </div>
    );
}
