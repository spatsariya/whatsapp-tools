document.documentElement.classList.add('js');
const menu=document.getElementById('menu-toggle'),nav=document.getElementById('navigation');
if(menu&&nav){menu.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open',!expanded)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.setAttribute('aria-expanded','false');nav.classList.remove('open')}));document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){menu.setAttribute('aria-expanded','false');nav.classList.remove('open');menu.focus()}})}
const views={workspace:{src:'assets/workspace.png?v=1.0.13',label:'Workspace overview',alt:'WhatsApp Tools desktop workspace displaying example accounts'},accounts:{src:'assets/account-controls.png?v=1.0.13',label:'Account settings',alt:'Account settings showing account customization and permissions'},broadcast:{src:'assets/broadcast.png?v=1.0.13',label:'Broadcast Studio',alt:'Broadcast Studio with personalized message preview'}};
const screenshot=document.getElementById('product-screenshot'),screenshotLabel=document.getElementById('screenshot-label');
document.querySelectorAll('[data-view]').forEach(button=>button.addEventListener('click',()=>{const view=views[button.dataset.view];if(!view||!screenshot)return;document.querySelectorAll('[data-view]').forEach(b=>{b.classList.toggle('selected',b===button);b.setAttribute('aria-pressed',String(b===button))});screenshot.src=view.src;screenshot.alt=view.alt;if(screenshotLabel)screenshotLabel.textContent=view.label}));

/**
 * Only promote a release once every advertised platform has a real public
 * asset. Existing static 1.0.14 links remain usable during network failures
 * or while a new build is still being published.
 */
async function loadLatestPublicRelease(){
  const endpoint='https://api.github.com/repos/spatsariya/whatsapp-tools/releases/latest';
  try{
    const response=await fetch(endpoint,{headers:{Accept:'application/vnd.github+json'}});
    if(!response.ok)return;
    const release=await response.json();
    if(!release||release.draft||release.prerelease)return;
    const version=String(release.tag_name||'').match(/^v(\d+\.\d+\.\d+)$/)?.[1];
    if(!version)return;
    const platforms={
      'download-windows':`WhatsApp-Tools-${version}-direct-unsigned-x64.exe`,
      'download-mac':`WhatsApp-Tools-${version}-direct-arm64.dmg`,
      'download-linux-appimage':`WhatsApp-Tools-${version}-direct-x86_64.AppImage`,
      'download-linux-deb':`WhatsApp-Tools-${version}-direct-amd64.deb`
    };
    const assets=Array.isArray(release.assets)?release.assets:[];
    const resolved={};
    for(const [id,name] of Object.entries(platforms)){
      const asset=assets.find(a=>a.name===name&&a.state==='uploaded'&&a.size>0);
      const url=asset?.browser_download_url;
      if(typeof url!=='string'||!url.startsWith('https://github.com/spatsariya/whatsapp-tools/releases/download/'))return;
      resolved[id]=url;
    }
    // Do not replace a newer, cached HTML link with an older API response.
    const current='1.0.14'.split('.').map(Number);
    const next=version.split('.').map(Number);
    for(let i=0;i<3;i++){
      if(next[i]<current[i])return;
      if(next[i]>current[i])break;
    }
    for(const [id,url] of Object.entries(resolved)){
      const link=document.getElementById(id);
      if(link)link.href=url;
    }
    const title=document.getElementById('release-announcement');
    if(title)title.textContent='WhatsApp Tools '+version;
    const footnote=document.getElementById('download-footnote-version');
    if(footnote)footnote.textContent='Version '+version;
    const notes=document.getElementById('release-notes-link');
    if(notes)notes.href='https://github.com/spatsariya/whatsapp-tools/releases/tag/'+encodeURIComponent(release.tag_name);
    const highlights=document.getElementById('release-highlights');
    if(highlights&&Number(version.split('.')[2])>=14&&version.startsWith('1.0.')){
      highlights.textContent='New in '+version+': right-click Cut, Copy, Paste, Select all and spelling suggestions in editable WhatsApp text fields.';
      highlights.hidden=false;
    }
    const ld=document.getElementById('app-jsonld');
    if(ld){try{const data=JSON.parse(ld.textContent);const app=data['@graph']?.find(entry=>entry['@type']==='SoftwareApplication');if(app)app.softwareVersion=version;ld.textContent=JSON.stringify(data)}catch{}}
  }catch{
    // Offline or GitHub API unavailable: keep working static download links.
  }
}
loadLatestPublicRelease();
