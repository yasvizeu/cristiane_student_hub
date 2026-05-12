const STUDENT_PASSWORD = "cristiane02";
const MASTER_PASSWORD = "yv314724";
const AUTH_KEY = "yv_cristiane_auth_until";
const SESSION_KEY = "yv_cristiane_session_auth";
function login(){const password=document.getElementById("password").value.trim();const remember=document.getElementById("remember").checked;const error=document.getElementById("errorMessage");if(password===STUDENT_PASSWORD||password===MASTER_PASSWORD){sessionStorage.setItem(SESSION_KEY,"true");if(remember){const expiresAt=Date.now()+3*24*60*60*1000;localStorage.setItem(AUTH_KEY,JSON.stringify({expiresAt}));}else{localStorage.removeItem(AUTH_KEY);}window.location.href="index.html";}else{error.style.display="block";}}
document.getElementById("password").addEventListener("keydown",e=>{if(e.key==="Enter")login();});
