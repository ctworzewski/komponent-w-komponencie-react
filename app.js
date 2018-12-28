class Header extends React.Component {
    render() {
        return(
            <section>
                <h1>Prosty komponent w Reacts</h1>
            </section>
        )
    }
}

class Nav extends React.Component {
    render() {
        return(
            <div>
                <ul>
                    <li>Start</li>
                    <li>Galeria</li>
                    <li>Kontakt</li>
                </ul>
            </div>
        )
    }
}


const PageWeb = () => {
    return(
        <div>
            <Header/>
            <Nav/>
        </div>
    )
}



ReactDOM.render(<PageWeb/>, document.getElementById('app'));