import React from 'react';

const LoadingScreen = () => {
    return (
        <div style={styles.container}>
            <img style={styles.img} src="public/LAPUERTALOADER.png" alt="" />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        backgroundColor: 'white',
    },
    img:{
        width:'auto',
        height:'20vh'
        
    },
};

export default LoadingScreen;
