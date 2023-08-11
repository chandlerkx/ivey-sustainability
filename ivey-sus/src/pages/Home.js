const Home = () => {
    return (

        <div>
            <img style={{ width: '100%', height: 350 }} src="/testimage.jpg" alt="Ivey Building" />
            <h2 style={{fontSize: '36px'}}>Providing members with the opportunity to further explore the topic of sustainability through informative events, quality research, and information on relevant careers.</h2>
            <div style={{display: 'flex'}}>
                <div style={{flex: 6}}>
                    <p style={{fontSize: '30px'}}>Helping students realize how sustainability converges with all facets of business. Our hope is to support members as they launch their business careers and arm them with the knowledge necessary to become leaders designed to create positive social and environmental impact.</p>
                </div>
                <div style={{flex: 3}}>

                </div>
                <div style={{flex: 8}}>
                    <img style={{maxWidth: '100%', height: '50%'}} src="/testimage2.jpg" />
                </div>
            </div>
        </div>


    )
    
    


};

export default Home;