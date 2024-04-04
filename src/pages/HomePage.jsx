import Card from '../components/Card';
function HomePage () {
    return (
        <div>
            <h1>Home Page</h1>
            <Card 
                title="Kaardi pealkiri" 
                description="See on selline tore kaart, et muudkui teed seda ja ongi nii" primaryButtonText="Vaata ise"
                secondaryButtonText="Ära vaata"
                />
        </div>
    )
}

export default HomePage;