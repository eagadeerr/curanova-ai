/* =====================================================
   CuraNova AI — Shared behavior
   - Theme (dark/light) toggle, persisted in localStorage-free
     memory var (falls back to dark on every load if storage
     is unavailable — safe for sandboxed previews).
   - Mock AI reply engine (placeholder until a real backend +
     AI API key is connected — see README-DEPLOY.md).
===================================================== */

(function themeInit(){
  var saved = 'dark';
  try { saved = window.localStorage.getItem('cn-theme') || 'dark'; } catch(e) {}
  document.documentElement.classList.add(saved);
})();

function toggleTheme(){
  var html = document.documentElement;
  var isLight = html.classList.contains('light');
  html.classList.remove('light','dark');
  html.classList.add(isLight ? 'dark' : 'light');
  try { window.localStorage.setItem('cn-theme', isLight ? 'dark' : 'light'); } catch(e) {}
  var icon = document.getElementById('theme-icon');
  if(icon) icon.textContent = isLight ? '🌙' : '☀️';
}

document.addEventListener('DOMContentLoaded', function(){
  var icon = document.getElementById('theme-icon');
  if(icon){
    icon.textContent = document.documentElement.classList.contains('light') ? '☀️' : '🌙';
  }
  // highlight active nav link
  var here = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-link').forEach(function(a){
    if(a.getAttribute('href') === here) a.classList.add('active');
  });
});

/* ---------------- Emergency keyword detection ----------------
   Pattern-level check only: flags a handful of red-flag terms
   so the UI can surface the emergency banner. This is NOT a
   medical triage system — it is a simple, conservative net.
------------------------------------------------------------- */
var EMERGENCY_TERMS = [
  'chest pain','can\'t breathe','cannot breathe','severe bleeding',
  'unconscious','stroke','suicidal','overdose','severe allergic',
  'difficulty breathing','blue lips','fainted','seizure'
];

function containsEmergencyTerm(text){
  var t = text.toLowerCase();
  return EMERGENCY_TERMS.some(function(term){ return t.indexOf(term) !== -1; });
}

/* ---------------- Mock AI reply ----------------
   Placeholder logic so the interface is fully demoable before
   a real AI API is wired up. Replace `mockAIReply` with a
   fetch() call to your backend once deployed (see README).
------------------------------------------------------------- */
function mockAIReply(userText){
  if(containsEmergencyTerm(userText)){
    return {
      emergency: true,
      text: "⚠️ What you're describing could be a medical emergency. Please contact your local emergency number or go to the nearest hospital immediately. This assistant cannot help with emergencies."
    };
  }
  var canned = [
    "Thanks for sharing that. Based on general health information, this could have a few common explanations, but I'm not able to confirm a diagnosis. It's a good idea to track how long this has lasted and mention it to a doctor if it continues.",
    "That's a common question. Generally speaking, mild versions of this are often managed with rest, hydration, and monitoring — but everyone's situation is different, so a licensed clinician can give you advice specific to you.",
    "Here's some general information that might help. Remember, I'm an AI assistant providing educational information, not a substitute for a real medical evaluation."
  ];
  return { emergency: false, text: canned[Math.floor(Math.random()*canned.length)] };
}
