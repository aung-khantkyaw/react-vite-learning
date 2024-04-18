import Button from "./Components/Button";
import Card from "./Components/Card"
import Counter from "./Components/Counter";
import Footer from "./Components/Footer"
import FormOnChange from "./Components/FormOnChange";
import Header from "./Components/Header"
import Hook from "./Components/Hook";
import List from "./Components/List"

function App() {
    const fruits = [
        {id: 1, name: "apple", price: 50},
        {id: 2, name: "orange", price: 30},
        {id: 3, name: "banana", price: 80},
    ];   

    const languages = [
        {id: 1, name: "Burmese", price: 200},
        {id: 2, name: "English", price: 300},
        {id: 3, name: "Science", price: 400},
    ]
    return (
        <>
            <Header/>
            <div className="container">
                <span className="section-title">
                    Card Component
                </span>
            <Card />
            <Card title="React Native" text="Lorem ipsum dolor sit, amet consectetur adipisicing elit." active={true}/>
            </div>
            <div className="container">
                <span className="section-title">
                    List Component
                </span>
                <List list={fruits} category="Fruits"/> <hr />
                <List list={languages} category="Languages"/> <hr />
                <List />
            </div>
            <div className="container">
                <span className="section-title">
                    Button Component
                </span>
                <Button />
            </div>
            <div className="container">
                <span className="section-title">
                    Hook
                </span>
                <Hook/>
            </div>
            <div className="container">
                <span className="section-title">
                    Counter
                </span>
                <Counter/>
            </div>
            <div className="container">
                <span className="section-title">
                    OnChange
                </span>
                <FormOnChange/>
            </div>
            <Footer/>
        </>
    )
}

export default App
