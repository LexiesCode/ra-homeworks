'use strict';

class Section extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false}
        this.toggleSection = this.toggleSection.bind(this);
    }

    toggleSection() {
        this.setState({open: !this.state.open});
    }

    render() {
        return (
            <section className={this.state.open ? 'section open' : 'section'}>
                <button onClick={this.toggleSection}>toggle</button>
                <h3 className="sectionhead" onClick={this.toggleSection}>{this.props.title}</h3>
                <div className="articlewrap">
                    <div className="article">
                        {this.props.children}
                    </div>
                </div>
            </section>

        );
    }
}

class Accordion extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main className="main">
			<h2 className="title">{this.props.title}</h2>
			{this.props.children}
		</main>
        );
    }
}

ReactDOM.render(
    <Accordion title='React'>
        <Section title='Компоненты'>
            Каждый компонент являются законченной частью пользовательского интерфейса и сам управляет своим состоянием, а композиция компонентов (соединение) позволяет создавать более сложные компоненты. Таким образом, создается иерархия компонентов, причем каждый отдельно взятый компонент независим сам по себе. Такой подход позволяет строить сложные интерфейсы, где есть множество состояний, и взаимодействовать между собой.
        </Section>
        <Section title='Выучил раз, используй везде!'>
        После изучения React вы сможете использовать его концепции не только в браузере, но также и при разработке мобильных приложений с использованием React Native.
        </Section>
        <Section title='Использование'>
        JSX является языком, расширяющим синтаксис стандартного Javascript. По факту он позволяет писать HTML-код в JS-скриптах. Такой подход упрощает разработку компонентов и повышает читаемость кода.
        </Section>
    </Accordion>,
    document.getElementById('accordian')
);
    