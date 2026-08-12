import React from 'react'

function Acard() {
    const places = [
        {
            "name": "Clarence Harvey",
            "gmail": "Eric45@gmail.com",
            "phone": "1-611-831-6743 x4505",
            "department": "Electronics",
            "imgpath": "/img/delhi tourist places.jpeg"
        },
        {
            "name": "Sonja Reynolds",
            "gmail": "Kayla.Kunde23@gmail.com",
            "phone": "366.521.8885 x777",
            "department": "Books",
            "imgpath": "/img/delhi tourist places.jpeg"

        },
        {
            "name": "Paulette Lueilwitz",
            "gmail": "Ofelia.Mann@hotmail.com",
            "phone": "905.980.1584",
            "department": "Grocery",
            "imgpath": "/img/delhi tourist places.jpeg"
        },
        {
            "name": "Rachel Jaskolski DDS",
            "gmail": "Crystel_Champlin@yahoo.com",
            "phone": "(807) 823-7343",
            "department": "Baby",
            "imgpath": "/img/delhi tourist places.jpeg"
        },
        {
            "name": "Leland Metz",
            "gmail": "Ruby.Greenfelder@yahoo.com",
            "phone": "1-263-274-4980",
            "department": "Movies",
            "imgpath": "/img/delhi tourist places.jpeg"
        },
        {
            "name": "Darrin Schmidt",
            "gmail": "Gudrun.Auer87@yahoo.com",
            "phone": "782.661.4189 x463",
            "department": "Home",
            "imgpath": "/img/delhi tourist places.jpeg"
        },
        {
            "name": "Patricia Kertzmann MD",
            "gmail": "Rylan_Sauer37@hotmail.com",
            "phone": "1-278-659-6794 x254",
            "department": "Sports",
            "imgpath": "/img/delhi tourist places.jpeg"
        },
        {
            "name": "Melvin Bergstrom",
            "gmail": "Michael_Hegmann@hotmail.com",
            "phone": "(308) 754-2493 x33970",
            "department": "Tools",
            "imgpath": "/img/delhi tourist places.jpeg"
        }
    ]
    return (
        <>
            <div className="container">
                <div className="row">

                    {places.map((c) => {
                        return (
                            <>
                                <div className="col-3">

                                    <div class="card" style={{ width: "18rem" }}>
                                        <img src={c.imgpath} class="card-img-top" alt="..." />
                                        <div class="card-body">
                                            <h5 className="card-title">{c.name}</h5>
                                            <h6 className="card-text" >{c.gmail}</h6>
                                            <h6 className="card-text" >{c.department}</h6>
                                            <h6 className="card-text" >{c.phone}</h6>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>

                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Acard
