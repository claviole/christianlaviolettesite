"use strict";(self.webpackChunkchristianssite=self.webpackChunkchristianssite||[]).push([[503],{503:(e,r,a)=>{a.r(r),a.d(r,{default:()=>E});var s=a(5043),i=a(9097),t=a(5204),n=a(3204),o=a(5242),d=a(1672),c=a(6429),l=a(2648);const m=(0,d.Wp)({apiKey:"AIzaSyD4Bu2Tqgr9ulzHyv8NYpnlXWOiSn6VxCc",authDomain:"lavioletteportfolio.firebaseapp.com",projectId:"lavioletteportfolio",storageBucket:"lavioletteportfolio.firebasestorage.app",messagingSenderId:"1020555305464",appId:"1:1020555305464:web:866e8bcc11fa82fa01b60d",measurementId:"G-V5NLM4QF47"}),h=(0,o.aU)(m);(0,c.c7)(m),(0,l.P5)(m);var g=a(579);const u=t.Ay.div`
  padding: var(--spacing-xl) 0;
`,x=t.Ay.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,p=t.Ay.h1`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  color: ${e=>e.theme.text};
`,b=t.Ay.p`
  font-size: 1.25rem;
  color: ${e=>e.theme.textSecondary};
  max-width: 800px;
  margin: 0 auto;
`,v=t.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-xl);

  @media (max-width: 992px) {
    grid-template-columns: 1fr;
  }
`,y=t.Ay.div`
  background: ${e=>e.theme.backgroundSecondary};
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`,j=t.Ay.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: ${e=>e.theme.text};
`,f=t.Ay.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${e=>e.theme.textSecondary};
  margin-bottom: var(--spacing-md);
`,k=t.Ay.div`
  display: flex;
  flex-direction: column;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);
`,w=t.Ay.div`
  display: flex;
  align-items: flex-start;
`,$=t.Ay.div`
  margin-right: var(--spacing-md);
  font-size: 1.5rem;
  color: ${e=>e.theme.primary};
  min-width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`,A=t.Ay.div`
  flex: 1;
`,S=t.Ay.h4`
  font-size: 1.1rem;
  margin-bottom: var(--spacing-xs);
  color: ${e=>e.theme.text};
`,z=t.Ay.p`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.95rem;
  word-break: break-word;

  a {
    color: ${e=>e.theme.textSecondary};
    text-decoration: none;
    transition: color var(--transition-fast);

    &:hover {
      color: ${e=>e.theme.primary};
    }
  }
`,C=t.Ay.div`
  background: ${e=>e.theme.backgroundSecondary};
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
`,I=t.Ay.div`
  margin-bottom: var(--spacing-md);
`,L=t.Ay.label`
  display: block;
  margin-bottom: var(--spacing-xs);
  color: ${e=>e.theme.text};
  font-weight: 500;
`,q=t.Ay.input`
  width: 100%;
  padding: 12px;
  border: 1px solid ${e=>e.theme.backgroundLight};
  border-radius: var(--border-radius-sm);
  background: ${e=>e.theme.background};
  color: ${e=>e.theme.text};
  font-size: 1rem;
  transition: border-color var(--transition-fast);

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.primary};
  }
`,F=t.Ay.textarea`
  width: 100%;
  padding: 12px;
  border: 1px solid ${e=>e.theme.backgroundLight};
  border-radius: var(--border-radius-sm);
  background: ${e=>e.theme.background};
  color: ${e=>e.theme.text};
  font-size: 1rem;
  resize: vertical;
  min-height: 150px;
  transition: border-color var(--transition-fast);

  &:focus {
    outline: none;
    border-color: ${e=>e.theme.primary};
  }
`,P=(0,t.Ay)(i.P.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.5rem;
  background: ${e=>e.theme.primary};
  color: white;
  border: none;
  border-radius: var(--border-radius);
  font-weight: 500;
  cursor: pointer;
  transition: background var(--transition-fast);

  &:hover {
    background: ${e=>e.theme.secondary};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`,D=t.Ay.div`
  padding: var(--spacing-sm);
  margin-bottom: var(--spacing-md);
  border-radius: var(--border-radius-sm);
  background: ${e=>e.success?"rgba(100, 255, 218, 0.1)":"rgba(239, 71, 111, 0.1)"};
  color: ${e=>e.success?e.theme.success:e.theme.error};
  border-left: 3px solid
    ${e=>e.success?e.theme.success:e.theme.error};
`,E=()=>{const[e,r]=(0,s.useState)({name:"",email:"",subject:"",message:""}),[a,t]=(0,s.useState)(!1),[d,c]=(0,s.useState)(null),l=e=>{const{name:a,value:s}=e.target;r((e=>({...e,[a]:s})))};return(0,g.jsx)(i.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:(0,g.jsxs)(u,{className:"container",children:[(0,g.jsxs)(x,{"data-aos":"fade-up",children:[(0,g.jsx)(p,{children:"Contact Me"}),(0,g.jsx)(b,{children:"Let's connect and discuss how we can work together"})]}),(0,g.jsxs)(v,{children:[(0,g.jsxs)(y,{"data-aos":"fade-up","data-aos-delay":"200",children:[(0,g.jsx)(j,{children:"Get In Touch"}),(0,g.jsx)(f,{children:"Feel free to reach out if you're looking for a developer, have a question, or just want to connect."}),(0,g.jsxs)(k,{children:[(0,g.jsxs)(w,{children:[(0,g.jsx)($,{children:(0,g.jsx)(n.maD,{})}),(0,g.jsxs)(A,{children:[(0,g.jsx)(S,{children:"Email"}),(0,g.jsx)(z,{children:(0,g.jsx)("a",{href:"mailto:christianlaviolette@outlook.com",children:"christianlaviolette@outlook.com"})})]})]}),(0,g.jsxs)(w,{children:[(0,g.jsx)($,{children:(0,g.jsx)(n.QEs,{})}),(0,g.jsxs)(A,{children:[(0,g.jsx)(S,{children:"LinkedIn"}),(0,g.jsx)(z,{children:(0,g.jsx)("a",{href:"https://linkedin.com/in/christianlaviolette",target:"_blank",rel:"noopener noreferrer",children:"linkedin.com/in/christianlaviolette"})})]})]}),(0,g.jsxs)(w,{children:[(0,g.jsx)($,{children:(0,g.jsx)(n.hL4,{})}),(0,g.jsxs)(A,{children:[(0,g.jsx)(S,{children:"GitHub"}),(0,g.jsx)(z,{children:(0,g.jsx)("a",{href:"https://github.com/claviole",target:"_blank",rel:"noopener noreferrer",children:"github.com/claviole"})})]})]})]})]}),(0,g.jsx)(C,{"data-aos":"fade-up","data-aos-delay":"400",children:(0,g.jsxs)("form",{onSubmit:async a=>{if(a.preventDefault(),e.name&&e.email&&e.message){t(!0);try{await(0,o.gS)((0,o.rJ)(h,"messages"),{...e,createdAt:(0,o.O5)()}),c({success:!0,message:"Your message has been sent! I'll respond as soon as possible."}),r({name:"",email:"",subject:"",message:""})}catch(s){console.error("Error sending message:",s),c({success:!1,message:"There was an error sending your message. Please try again."})}finally{t(!1)}}else c({success:!1,message:"Please fill out all required fields."})},children:[d&&(0,g.jsx)(D,{success:d.success,children:d.message}),(0,g.jsxs)(I,{children:[(0,g.jsx)(L,{htmlFor:"name",children:"Name *"}),(0,g.jsx)(q,{type:"text",id:"name",name:"name",value:e.name,onChange:l,required:!0})]}),(0,g.jsxs)(I,{children:[(0,g.jsx)(L,{htmlFor:"email",children:"Email *"}),(0,g.jsx)(q,{type:"email",id:"email",name:"email",value:e.email,onChange:l,required:!0})]}),(0,g.jsxs)(I,{children:[(0,g.jsx)(L,{htmlFor:"subject",children:"Subject"}),(0,g.jsx)(q,{type:"text",id:"subject",name:"subject",value:e.subject,onChange:l})]}),(0,g.jsxs)(I,{children:[(0,g.jsx)(L,{htmlFor:"message",children:"Message *"}),(0,g.jsx)(F,{id:"message",name:"message",rows:"5",value:e.message,onChange:l,required:!0})]}),(0,g.jsxs)(P,{type:"submit",disabled:a,whileHover:{scale:1.05},whileTap:{scale:.95},children:[a?"Sending...":"Send Message",(0,g.jsx)(n.Cer,{style:{marginLeft:"10px"}})]})]})})]})]})})}}}]);
//# sourceMappingURL=503.f842a636.chunk.js.map