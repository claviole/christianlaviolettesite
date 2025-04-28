"use strict";(self.webpackChunkchristianssite=self.webpackChunkchristianssite||[]).push([[469],{7469:(e,i,t)=>{t.r(i),t.d(i,{default:()=>N});var a=t(5043),r=t(9097),o=t(5204),n=t(3204),s=t(579);const c=(0,o.Ay)(r.P.div)`
  background: ${e=>e.theme.backgroundSecondary};
  border-radius: var(--border-radius);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  height: 100%;
`,l=o.Ay.div`
  position: relative;
  height: 200px;
  overflow: hidden;
`,d=o.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-medium);

  ${c}:hover & {
    transform: scale(1.05);
  }
`,g=o.Ay.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.6)
  );
  opacity: 0;
  transition: opacity var(--transition-medium);

  ${c}:hover & {
    opacity: 1;
  }
`,m=o.Ay.div`
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`,h=o.Ay.h3`
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
  color: ${e=>e.theme.text};
`,p=o.Ay.p`
  color: ${e=>e.theme.textSecondary};
  font-size: 0.95rem;
  line-height: 1.6;
  margin-bottom: 1.25rem;
  flex-grow: 1;
`,x=o.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.25rem;
`,y=o.Ay.span`
  background: ${e=>e.theme.backgroundLight};
  color: ${e=>e.theme.textSecondary};
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.8rem;
  font-weight: 500;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background: ${e=>e.theme.primary};
    color: white;
  }
`,u=o.Ay.div`
  display: flex;
  gap: 1rem;
  margin-top: auto;
`,f=o.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.primary};
  font-weight: 500;
  transition: color var(--transition-fast);

  &:hover {
    color: ${e=>e.theme.secondary};
  }
`,b=e=>{let{project:i}=e;const{title:t,description:a,image:r,technologies:o,category:b,link:v,github:j}=i;return(0,s.jsxs)(c,{whileHover:{y:-10},transition:{duration:.3},"data-aos":"fade-up","data-category":b,children:[(0,s.jsxs)(l,{children:[(0,s.jsx)(d,{src:r,alt:t}),(0,s.jsx)(g,{className:"project-image-overlay"})]}),(0,s.jsxs)(m,{children:[(0,s.jsx)(h,{children:t}),(0,s.jsx)(p,{children:a}),(0,s.jsx)(x,{children:o.map(((e,i)=>(0,s.jsx)(y,{children:e},i)))}),(0,s.jsxs)(u,{children:[j&&(0,s.jsxs)(f,{href:j,target:"_blank",rel:"noopener noreferrer","aria-label":`View ${t} code on GitHub`,children:[(0,s.jsx)(n.hL4,{})," Code"]}),v&&(0,s.jsxs)(f,{href:v,target:"_blank",rel:"noopener noreferrer","aria-label":`View live demo of ${t}`,children:[(0,s.jsx)(n.EQc,{})," Live"]})]})]})]})},v=o.Ay.section`
  padding: var(--spacing-xl) 0;
`,j=o.Ay.h2`
  font-size: 2.2rem;
  margin-bottom: var(--spacing-lg);
  text-align: center;
  color: ${e=>e.theme.text};
`,w=o.Ay.div`
  display: flex;
  justify-content: center;
  margin-bottom: var(--spacing-xl);
  flex-wrap: wrap;
  gap: 1rem;
`,A=o.Ay.button`
  background: transparent;
  border: none;
  color: ${e=>e.theme.textSecondary};
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  padding: 0.5rem 1rem;

  &.active {
    color: ${e=>e.theme.primary};
  }
`,k=o.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: var(--spacing-lg);
`,$=()=>{const[e,i]=(0,a.useState)("all"),t=[{id:1,title:"Part Of Their World LLC",description:"Web application for an Ohio-based party planning company that serves both as a client-facing website and an internal management tool.",image:"/assets/projects/partoftheirworld.jpg",technologies:["React","Firebase","JavaScript"],category:"web",link:"https://partoftheirworld.com",github:"https://github.com/claviole/partoftheirworld"},{id:2,title:"Campus Map Design Project",description:"Led a team of 12 students in developing an interactive campus map for the university.",image:"/assets/projects/campusmap.jpg",technologies:["React","Firebase","JavaScript","Google Maps API"],category:"web",github:"https://github.com/claviole/campus-map"},{id:3,title:"Music Genre Identification",description:"Trained a model to predict music genres based on artist images with 87% accuracy using a dataset of 20,000 images.",image:"/assets/projects/musicgenre.jpg",technologies:["PyTorch","FastAI","Python","Machine Learning"],category:"ai",github:"https://github.com/claviole/music-genre-id"},{id:4,title:"Image Generation with CGANs",description:"Developed and trained a CGAN from scratch to generate high-quality 720x720 images of various environments.",image:"/assets/projects/imagegen.jpg",technologies:["PyTorch","TensorFlow","CGANs","Python"],category:"ai",github:"https://github.com/yourusername/image-generation"}],r="all"===e?t:t.filter((i=>i.category===e));return(0,s.jsxs)(v,{children:[(0,s.jsx)(j,{children:"Projects & Work"}),(0,s.jsxs)(w,{children:[(0,s.jsx)(A,{className:"all"===e?"active":"",onClick:()=>i("all"),children:"All Projects"}),(0,s.jsx)(A,{className:"web"===e?"active":"",onClick:()=>i("web"),children:"Web Development"}),(0,s.jsx)(A,{className:"ai"===e?"active":"",onClick:()=>i("ai"),children:"AI & Machine Learning"})]}),(0,s.jsx)(k,{children:r.map((e=>(0,s.jsx)(b,{project:e},e.id)))})]})},P=o.Ay.div`
  padding: var(--spacing-xl) 0;
`,C=o.Ay.div`
  text-align: center;
  margin-bottom: var(--spacing-xl);
`,S=o.Ay.h1`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  color: ${e=>e.theme.text};
`,L=o.Ay.p`
  font-size: 1.25rem;
  color: ${e=>e.theme.textSecondary};
  max-width: 800px;
  margin: 0 auto;
`,N=()=>(0,s.jsx)(r.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:(0,s.jsxs)(P,{className:"container",children:[(0,s.jsxs)(C,{"data-aos":"fade-up",children:[(0,s.jsx)(S,{children:"My Projects"}),(0,s.jsx)(L,{children:"Showcasing my work in software engineering, web development, and artificial intelligence"})]}),(0,s.jsx)($,{})]})})}}]);
//# sourceMappingURL=469.2c95d057.chunk.js.map