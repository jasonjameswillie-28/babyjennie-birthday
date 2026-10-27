const chapters=[...document.querySelectorAll(".chapter")];let current=0;
const progressBar=document.querySelector("#progressBar"),progressLabel=document.querySelector("#progressLabel"),backBtn=document.querySelector("#backBtn");
function goTo(n){current=Math.max(0,Math.min(chapters.length-1,n));chapters.forEach((c,i)=>c.classList.toggle("active",i===current));progressBar.style.width=((current+1)/chapters.length*100)+"%";progressLabel.textContent=`${chapters[current].dataset.title} • ${current+1} / ${chapters.length}`;backBtn.disabled=current===0;window.scrollTo({top:0,behavior:"smooth"});}
document.querySelectorAll(".next").forEach(b=>b.addEventListener("click",()=>goTo(current+1)));
backBtn.addEventListener("click",()=>goTo(current-1));
document.querySelector("#restartBtn").addEventListener("click",()=>goTo(0));
document.querySelector("#envelope").addEventListener("click",()=>goTo(1));
document.querySelector("#envelope").addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();goTo(1)}});
const notes=["Your smile makes even the hardest day feel softer.","You are gorgeous to me, in every season and every mood.","I love that our story began back in secondary school.","I love that we got to experience university together.","You make the simplest moments worth remembering.","Thank you for staying beside me through difficult times.","I love growing and learning alongside you.","I love the comfort of knowing we have each other.","I look forward to all the memories we haven't made yet.","If I could choose again, BabyJennie, I would still choose you."];
const hearts=document.querySelector("#hearts"),heartMessage=document.querySelector("#heartMessage");
notes.forEach((note,i)=>{const b=document.createElement("button");b.className="heart-btn";b.textContent="♡";b.setAttribute("aria-label",`Reveal reason ${i+1}`);b.addEventListener("click",()=>{b.classList.add("seen");b.textContent="♥";heartMessage.textContent=note});hearts.appendChild(b)});
document.querySelector("#letterBtn").addEventListener("click",()=>{const l=document.querySelector("#letter");l.classList.toggle("open");document.querySelector("#letterBtn").setAttribute("aria-expanded",l.classList.contains("open"));document.querySelector("#letterBtn span").textContent=l.classList.contains("open")?"Tap to fold the letter":"Tap to unfold your letter";});
document.querySelector("#surpriseBtn").addEventListener("click",()=>{document.querySelector("#lastNote").classList.add("show");for(let i=0;i<48;i++){const e=document.createElement("span");e.className="confetti";e.textContent=i%3===0?"♡":"♥";e.style.left=Math.random()*100+"vw";e.style.color=["#d987a4","#a96b86","#f0b7c7"][i%3];e.style.fontSize=(13+Math.random()*22)+"px";e.style.animationDuration=(3+Math.random()*4)+"s";e.style.animationDelay=Math.random()*1.8+"s";document.body.appendChild(e);setTimeout(()=>e.remove(),9500)}});
const photoDialog=document.querySelector("#photoDialog"),dialogImage=document.querySelector("#dialogImage"),dialogCaption=document.querySelector("#dialogCaption");
document.querySelectorAll(".photo").forEach(p=>{const path=p.dataset.photo;const img=new Image();img.onload=()=>{p.style.backgroundImage=`linear-gradient(0deg,#40202a77,transparent 65%),url("${path}")`;p.classList.add("has-image");p.style.color="#fff";};img.src=path;p.addEventListener("click",()=>{dialogImage.innerHTML="";if(p.classList.contains("has-image")){const full=document.createElement("img");full.src=path;full.alt="Our memory";dialogImage.appendChild(full)}else{dialogImage.textContent="♡ Add your own photo to bring this memory to life."}dialogCaption.textContent=p.dataset.caption||"A beautiful part of our story ♡";photoDialog.showModal()})});
document.querySelector("#closeDialog").addEventListener("click",()=>photoDialog.close());
const musicDialog=document.querySelector("#musicDialog");document.querySelector("#soundBtn").addEventListener("click",()=>musicDialog.showModal());document.querySelector("#closeMusic").addEventListener("click",()=>musicDialog.close());
goTo(0);

/* BabyJennie's envelope background music */

const loveSong = document.getElementById("audio");
const birthdayEnvelope = document.getElementById("envelope");
const firstSurpriseButton = document.querySelector(
  ".chapter.active .next"
);

function startBirthdayMusic() {
  if (!loveSong || !loveSong.paused) return;

  loveSong.loop = true;

  loveSong.play().catch(function (error) {
    console.log("Music could not start:", error);
  });
}

if (birthdayEnvelope) {
  birthdayEnvelope.addEventListener(
    "click",
    startBirthdayMusic
  );

  birthdayEnvelope.addEventListener(
    "keydown",
    function (event) {
      if (event.key === "Enter" || event.key === " ") {
        startBirthdayMusic();
      }
    }
  );
}

if (firstSurpriseButton) {
  firstSurpriseButton.addEventListener(
    "click",
    startBirthdayMusic
  );
}
