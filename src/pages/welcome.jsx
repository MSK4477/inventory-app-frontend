
const Welcome = () => {


    const navigateToHome = () => {

        return  window.location.href = "/dashboard"
    }
    let data = JSON.parse(localStorage.getItem("user"))
    console.log(data)
    return (
        <div className="h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold  mb-4">Welcome {data.name} to My inventory app!</h1>
            <p className="text-lg mb-8">Here you can manage your inventory and keep track of your products.</p>
            <button onClick={navigateToHome} className="bg-blue-500 hover:bg-sky-700 text-white font-bold py-2 px-4 rounded">
                Get started
            </button>
       
    
        </div>
    );
}

export default Welcome;
