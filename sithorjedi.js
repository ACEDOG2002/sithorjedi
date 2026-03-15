/* --- 1. GLOBAL & MOVING SPACE BACKGROUND --- */
body {
    margin: 0;
    padding: 0;
    min-height: 100vh;
    color: white;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #000;
    
    /* Radial gradients create tiling 'stars' */
    background-image: 
        radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 3px),
        radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 2px),
        radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 3px);
    background-size: 550px 550px, 350px 350px, 250px 250px;
    background-position: 0 0, 40px 60px, 130px 270px;
    
    /* The animation forces the background-position to tile, creating motion */
    animation: hyperspace 10s linear infinite;
    z-index: -1;
}

@keyframes hyperspace {
    from { background-position: 0 0, 40px 60px, 130px 270px; }
    to { background-position: 550px 550px, 390px 410px, 380px 520px; }
}

/* --- 2. MAIN VOTING PAGE CONTENT --- */
h1 {
    color: #ffe81f; /* Star Wars Yellow */
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-top: 30px;
    text-shadow: 0 0 15px rgba(255, 232, 31, 0.7); /* Text glow */
}

.main-stage { 
    display: flex; 
    justify-content: center; 
    gap: 40px; 
    flex-wrap: wrap; 
    margin-top: 30px;
    z-index: 10;
    width: 100%;
    max-width: 1000px;
}

.card { 
    background: rgba(26, 26, 26, 0.85); /* Semitransparent so stars show through */
    border: 3px solid #333; 
    border-radius: 20px; 
    padding: 25px; 
    width: 320px; 
    text-align: center;
    transition: all 0.3s ease-out;
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

/* Lightsaber glows on hover */
.jedi-card:hover { border-color: #2e67f8; box-shadow: 0 0 40px rgba(46, 103, 248, 0.6); }
.sith-card:hover { border-color: #f82e2e; box-shadow: 0 0 40px rgba(248, 46, 46, 0.6); }

img.profile { 
    width: 100%; 
    height: 420px; 
    object-fit: cover; 
    border-radius: 10px; 
}

button { 
    width: 100%; 
    padding: 18px; 
    margin-top: 20px; 
    border: none; 
    border-radius: 8px; 
    font-weight: bold; 
    cursor: pointer; 
    color: white;
    text-transform: uppercase; 
    font-size: 1.1rem;
    transition: transform 0.1s, background-color 0.3s;
}

button:active { transform: scale(0.96); }

.btn-jedi { background: #2e67f8; }
.btn-sith { background: #f82e2e; }

/* Vote counters */
.count { 
    font-size: 3.5rem; 
    margin-top: 15px; 
    font-weight: bold; 
    font-family: 'Courier New', monospace; 
    color: #ddd;
    text-shadow: 0 0 5px rgba(255,255,255,0.3);
}

/* --- 3. QR CODE FOOTER & EXPLOSION EFFEFFECT --- */
.qr-footer {
    margin-top: auto; /* Push footer to the bottom of the screen */
    padding: 30px;
    width: 100%;
    background: rgba(0,0,0,0.7);
    border-top: 1px solid #333;
    text-align: center;
    z-index: 10;
}

/* Specific text you requested */
.qr-footer p { 
    font-size: 0.9rem; 
    letter-spacing: 2px; 
    color: #ffe81f; /* Light up yellow */
    margin: 0 0 15px 0; 
    text-shadow: 0 0 10px rgba(255,232,31,0.5);
}

/* This is the div that creates the "explosion" glow */
.qr-explosion-ring {
    display: inline-block;
    border-radius: 10px;
    transition: transform 0.2s;
    position: relative;
    /* Puts the animation on the ring itself */
    animation: qrExplosion 1.5s ease-in-out infinite;
}

/* The QR image itself, centered within the ring */
#qr-image { 
    background: white; 
    padding: 12px; 
    border-radius: 10px; 
    width: 140px; 
    height: 140px; 
    display: block;
}

/* THE QR EXPLOSION ANIMATION */
@keyframes qrExplosion {
    0% {
        box-shadow: 0 0 20px 5px rgba(255, 232, 31, 0.4);
        transform: scale(1.0);
    }
    50% {
        box-shadow: 0 0 40px 15px rgba(255, 232, 31, 0.8), 
                    0 0 15px 5px rgba(255, 232, 31, 0.6);
        transform: scale(1.05); /* Slight grow */
    }
    100% {
        box-shadow: 0 0 20px 5px rgba(255, 232, 31, 0.4);
        transform: scale(1.0);
    }
}