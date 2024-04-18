function Footer() {
    const styles = {
        border: "1px solid black",
        textAlign: "center",
        padding: "10px"
    };
    return (
        <h4 style={styles}>&copy; {new Date().getFullYear()} My-React-App</h4>
    )
}
export default Footer