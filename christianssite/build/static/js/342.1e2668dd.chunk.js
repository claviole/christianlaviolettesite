"use strict";(self.webpackChunkchristianssite=self.webpackChunkchristianssite||[]).push([[342],{342:(e,i,a)=>{a.r(i),a.d(i,{default:()=>ue});var t=a(5043),n=a(9097),r=a(5204),s=a(1975),o=a(7906),d=a(9203),l=a(8710),c=a(9667),m=a(579);const p=r.Ay.section`
  position: relative;
  height: 100vh;
  min-height: 700px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 0 var(--spacing-md);
`,h=r.Ay.div`
  max-width: var(--max-width);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`,g=r.Ay.div`
  flex: 1;
  max-width: 600px;
  z-index: 1;

  @media (max-width: 1024px) {
    margin-bottom: var(--spacing-xl);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`,x=r.Ay.div`
  font-size: 1.25rem;
  color: ${e=>e.theme.primary};
  margin-bottom: var(--spacing-xs);
  font-weight: 500;
`,y=r.Ay.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);

  @media (max-width: 480px) {
    flex-direction: column;
    gap: var(--spacing-sm);
    width: 100%;
  }
`,u=(0,r.Ay)((0,n.P)(s.N_))`
  background: ${e=>e.theme.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  display: inline-block;
  transition: background var(--transition-fast);

  &:hover {
    background: ${e=>e.theme.secondary};
    color: white;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`,f=(0,r.Ay)((0,n.P)(s.N_))`
  background: transparent;
  color: ${e=>e.theme.primary};
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 500;
  border: 1px solid ${e=>e.theme.primary};
  display: inline-block;
  transition:
    background var(--transition-fast),
    color var(--transition-fast);

  &:hover {
    background: ${e=>e.theme.primary};
    color: white;
  }

  @media (max-width: 480px) {
    width: 100%;
    text-align: center;
  }
`,v=r.Ay.div`
  flex: 1;
  height: 500px;
  z-index: 0;

  canvas {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 1024px) {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.3;
    z-index: -1;
  }
`,b=r.Ay.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;

  @media (max-width: 768px) {
    display: none;
  }
`,w=()=>{const e=(0,t.useRef)(null);return(0,t.useEffect)((()=>{const i=i=>{if(!e.current)return;const a=(window.innerWidth/2-i.clientX)/25,t=(window.innerHeight/2-i.clientY)/25;e.current.style.transform=`translateX(${a}px) translateY(${t}px)`};return window.addEventListener("mousemove",i),()=>{window.removeEventListener("mousemove",i)}}),[]),(0,m.jsxs)(p,{children:[(0,m.jsxs)(h,{children:[(0,m.jsxs)(g,{children:[(0,m.jsx)(x,{children:"Hello, I'm"}),(0,m.jsx)(n.P.h1,{className:"name",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8},children:"Christian Laviolette"}),(0,m.jsxs)(n.P.h2,{className:"title",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},children:[(0,m.jsx)("span",{className:"highlight",children:"Software Engineer"})," &"," ",(0,m.jsx)("span",{className:"highlight",children:"AI Specialist"})]}),(0,m.jsx)(n.P.p,{className:"description",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.6},children:"Building intelligent solutions at the intersection of software engineering and artificial intelligence. Currently pursuing a Master's in AI at Purdue University with a focus on AI policy, governance, and strategic management."}),(0,m.jsxs)(y,{children:[(0,m.jsx)(u,{to:"/projects",whileHover:{scale:1.05},whileTap:{scale:.95},children:"View My Work"}),(0,m.jsx)(f,{to:"/contact",whileHover:{scale:1.05},whileTap:{scale:.95},children:"Get In Touch"})]})]}),(0,m.jsx)(v,{ref:e,children:(0,m.jsxs)(o.Hl,{camera:{position:[0,0,4],fov:50},children:[(0,m.jsx)("ambientLight",{intensity:.5}),(0,m.jsx)("directionalLight",{position:[10,10,5],intensity:1}),(0,m.jsx)(d.iy,{args:[1,100,200],scale:1.8,children:(0,m.jsx)(l.I,{color:"#6e57e0",attach:"material",distort:.4,speed:2,roughness:.5})}),(0,m.jsx)(c.N,{enableZoom:!1,autoRotate:!0,autoRotateSpeed:.5})]})})]}),(0,m.jsxs)(b,{children:[(0,m.jsx)("div",{className:"mouse",children:(0,m.jsx)("div",{className:"wheel"})}),(0,m.jsxs)("div",{className:"arrow",children:[(0,m.jsx)("span",{}),(0,m.jsx)("span",{}),(0,m.jsx)("span",{})]})]})]})};var j=a(3204);const A=r.Ay.section`
  margin: var(--spacing-xl) 0;
`,k=r.Ay.div`
  text-align: center;
  margin-bottom: var(--spacing-lg);
`,$=r.Ay.h2`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  color: ${e=>e.theme.text};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,z=r.Ay.p`
  font-size: 1.2rem;
  color: ${e=>e.theme.textSecondary};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,L=r.Ay.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`,P=r.Ay.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--spacing-lg);
  background: ${e=>e.theme.cardBackground};
  border-radius: var(--border-radius);
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform var(--transition-medium),
    box-shadow var(--transition-medium);

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }

  &:nth-child(even) {
    @media (min-width: 901px) {
      direction: rtl;

      & > div {
        direction: ltr;
      }
    }
  }
`,I=r.Ay.div`
  position: relative;
  height: 100%;
  min-height: 300px;
  overflow: hidden;
`,N=r.Ay.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform var(--transition-medium);

  ${P}:hover & {
    transform: scale(1.05);
  }
`,S=r.Ay.div`
  position: absolute;
  top: 20px;
  left: 20px;
  background: ${e=>e.theme.primary};
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 500;
  z-index: 1;
`,M=r.Ay.div`
  padding: var(--spacing-md);
  display: flex;
  flex-direction: column;
`,T=r.Ay.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-sm);
  color: ${e=>e.theme.text};
`,D=r.Ay.p`
  color: ${e=>e.theme.textSecondary};
  margin-bottom: var(--spacing-sm);
  line-height: 1.6;
`,E=r.Ay.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: var(--spacing-sm) 0;
`,H=r.Ay.span`
  background: ${e=>e.theme.backgroundLight};
  color: ${e=>e.theme.textSecondary};
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
`,C=r.Ay.div`
  display: flex;
  gap: var(--spacing-sm);
  margin-top: auto;
  padding-top: var(--spacing-sm);
`,R=r.Ay.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${e=>e.theme.primary};
  font-weight: 500;
  transition: color var(--transition-fast);

  &:hover {
    color: ${e=>e.theme.secondary};
  }
`,_=r.Ay.div`
  text-align: center;
  margin-top: var(--spacing-lg);
`,W=(0,r.Ay)(s.N_)`
  display: inline-flex;
  align-items: center;
  color: ${e=>e.theme.primary};
  font-weight: 600;
  font-size: 1.1rem;
  transition: color var(--transition-fast);

  &:hover {
    color: ${e=>e.theme.secondary};
  }
`,Y=()=>(0,m.jsxs)(A,{children:[(0,m.jsxs)(k,{"data-aos":"fade-up",children:[(0,m.jsx)($,{children:"Featured Projects"}),(0,m.jsx)(z,{children:"A selection of my recent work in software engineering and AI"})]}),(0,m.jsx)(L,{children:[{id:1,title:"Part Of Their World LLC",description:"Web application for an Ohio-based party planning company that serves both as a client-facing website and an internal management tool for scheduling, booking, and employee management.",image:"/assets/projects/partoftheirworld.jpg",technologies:["React","Firebase","JavaScript","Responsive Design"],category:"web",link:"https://partoftheirworld.com",github:"https://github.com/claviole/partoftheirworld"},{id:3,title:"Music Genre Identification",description:"Machine learning model that identifies music genres from artist images with 87% accuracy, trained on a dataset of 20,000 images. Demonstrates the intersection of computer vision and music classification.",image:"/assets/projects/musicgenre.jpg",technologies:["PyTorch","FastAI","Python","Machine Learning"],category:"ai",github:"https://github.com/claviole/music-genre-id"}].map(((e,i)=>(0,m.jsxs)(P,{"data-aos":"fade-up","data-aos-delay":100*i,children:[(0,m.jsxs)(I,{children:[(0,m.jsx)(N,{src:e.image,alt:e.title}),(0,m.jsx)(S,{children:"ai"===e.category?"AI / Machine Learning":"Web Development"})]}),(0,m.jsxs)(M,{children:[(0,m.jsx)(T,{children:e.title}),(0,m.jsx)(D,{children:e.description}),(0,m.jsx)(E,{children:e.technologies.map(((e,i)=>(0,m.jsx)(H,{children:e},i)))}),(0,m.jsxs)(C,{children:[e.github&&(0,m.jsxs)(R,{href:e.github,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsx)(j.hL4,{})," GitHub"]}),e.link&&(0,m.jsxs)(R,{href:e.link,target:"_blank",rel:"noopener noreferrer",children:[(0,m.jsx)(j.EQc,{})," Live Demo"]})]})]})]},e.id)))}),(0,m.jsx)(_,{"data-aos":"fade-up",children:(0,m.jsxs)(W,{to:"/projects",children:["View All Projects ",(0,m.jsx)(j.Z0P,{style:{marginLeft:"10px"}})]})})]}),B=r.Ay.section`
  margin: var(--spacing-xl) 0;
`,F=r.Ay.div`
  text-align: center;
  margin-bottom: var(--spacing-lg);
`,G=r.Ay.h2`
  font-size: 2.5rem;
  margin-bottom: var(--spacing-sm);
  color: ${e=>e.theme.text};

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,V=r.Ay.p`
  font-size: 1.2rem;
  color: ${e=>e.theme.textSecondary};
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,Z=r.Ay.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing-lg);
  margin-bottom: var(--spacing-lg);
`,Q=r.Ay.div`
  background: ${e=>e.theme.cardBackground};
  border-radius: var(--border-radius);
  padding: var(--spacing-lg);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition:
    transform var(--transition-medium),
    box-shadow var(--transition-medium);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  }
`,X=r.Ay.img`
  width: 60px;
  height: 60px;
  margin-bottom: var(--spacing-sm);
`,J=r.Ay.h3`
  font-size: 1.5rem;
  margin-bottom: var(--spacing-md);
  color: ${e=>e.theme.text};
`,O=r.Ay.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
  width: 100%;
`,U=r.Ay.li`
  display: flex;
  align-items: center;
  margin-bottom: 0.75rem;
  color: ${e=>e.theme.textSecondary};
`,q=r.Ay.span`
  display: inline-block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: ${e=>e.theme.primary};
  margin-right: 10px;
`,K=r.Ay.div`
  text-align: center;
  margin-top: var(--spacing-lg);
`,ee=(0,r.Ay)(s.N_)`
  display: inline-flex;
  align-items: center;
  color: ${e=>e.theme.primary};
  font-weight: 600;
  font-size: 1.1rem;
  transition: color var(--transition-fast);

  &:hover {
    color: ${e=>e.theme.secondary};
  }
`,ie=()=>(0,m.jsxs)(B,{children:[(0,m.jsxs)(F,{"data-aos":"fade-up",children:[(0,m.jsx)(G,{children:"Professional Skills"}),(0,m.jsx)(V,{children:"A blend of technical expertise in software engineering and artificial intelligence"})]}),(0,m.jsx)(Z,{children:[{name:"AI & Machine Learning",icon:"/assets/icons/ai.svg",skills:["Neural Networks","Computer Vision","Natural Language Processing","Model Deployment"]},{name:"Web Development",icon:"/assets/icons/web.svg",skills:["React","JavaScript","Node.js","Firebase","Responsive Design"]},{name:"Backend Development",icon:"/assets/icons/backend.svg",skills:["Python","PHP","MySQL","NoSQL","API Development"]}].map(((e,i)=>(0,m.jsxs)(Q,{"data-aos":"fade-up","data-aos-delay":100*i,children:[(0,m.jsx)(X,{src:e.icon,alt:e.name}),(0,m.jsx)(J,{children:e.name}),(0,m.jsx)(O,{children:e.skills.map(((e,i)=>(0,m.jsxs)(U,{children:[(0,m.jsx)(q,{}),e]},i)))})]},i)))}),(0,m.jsx)(K,{"data-aos":"fade-up",children:(0,m.jsxs)(ee,{to:"/skills",children:["View All Skills ",(0,m.jsx)(j.Z0P,{style:{marginLeft:"10px"}})]})})]}),ae=r.Ay.section`
  margin: var(--spacing-xl) 0;
  padding: var(--spacing-xl) var(--spacing-md);
  background: ${e=>e.theme.gradientPrimary};
  border-radius: var(--border-radius);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  overflow: hidden;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("/assets/patterns/circuit-pattern.svg") no-repeat;
    background-size: cover;
    opacity: 0.1;
    z-index: 0;
  }
`,te=r.Ay.div`
  text-align: center;
  position: relative;
  z-index: 1;
`,ne=r.Ay.h2`
  font-size: 2.5rem;
  color: white;
  margin-bottom: var(--spacing-sm);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`,re=r.Ay.p`
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.8);
  max-width: 800px;
  margin: 0 auto var(--spacing-lg);

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`,se=(0,r.Ay)((0,n.P)(s.N_))`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: white;
  color: var(--primary-color);
  padding: 0.75rem 1.5rem;
  border-radius: var(--border-radius);
  font-weight: 600;
  transition:
    background var(--transition-fast),
    transform var(--transition-fast);

  &:hover {
    background: rgba(255, 255, 255, 0.9);
    color: var(--primary-color);
  }
`,oe=e=>{let{heading:i,subheading:a,buttonText:t,buttonLink:n}=e;return(0,m.jsx)(ae,{"data-aos":"fade-up",children:(0,m.jsxs)(te,{children:[(0,m.jsx)(ne,{children:i}),(0,m.jsx)(re,{children:a}),(0,m.jsxs)(se,{to:n,whileHover:{scale:1.05},whileTap:{scale:.95},children:[t," ",(0,m.jsx)(j.Z0P,{style:{marginLeft:"10px"}})]})]})})},de=r.Ay.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 var(--spacing-md);
`,le=r.Ay.section`
  padding: var(--spacing-xl) 0;
`,ce=r.Ay.h2`
  position: relative;
  margin-bottom: var(--spacing-md);
  color: ${e=>e.theme.primary};

  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 80px;
    height: 4px;
    background: ${e=>e.theme.primary};
    border-radius: 4px;
  }
`,me=r.Ay.div`
  margin-top: var(--spacing-md);
  font-size: 1.2rem;
  color: ${e=>e.theme.textSecondary};
  max-width: 800px;
`,pe=r.Ay.div`
  display: flex;
  gap: var(--spacing-md);
  margin-top: var(--spacing-lg);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: var(--spacing-sm);
  }
`,he=r.Ay.div`
  background: ${e=>e.theme.backgroundSecondary};
  border-radius: var(--border-radius);
  padding: var(--spacing-md);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  flex: 1;
  text-align: center;
  transition: transform var(--transition-medium);

  &:hover {
    transform: translateY(-5px);
  }
`,ge=r.Ay.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: ${e=>e.theme.accent};
  margin-bottom: 0.5rem;
`,xe=r.Ay.div`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${e=>e.theme.primary};
  margin-bottom: 0.5rem;
`,ye=r.Ay.div`
  font-size: 0.9rem;
  color: ${e=>e.theme.textTertiary};
`,ue=()=>(0,m.jsxs)(n.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:.5},children:[(0,m.jsx)(w,{}),(0,m.jsxs)(de,{children:[(0,m.jsxs)(le,{children:[(0,m.jsx)(ce,{"data-aos":"fade-up",children:"AI & Software Engineering"}),(0,m.jsxs)(me,{"data-aos":"fade-up","data-aos-delay":"200",children:[(0,m.jsx)(n.P.p,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:.8,delay:.3},children:"I'm a versatile Software Engineer with expertise in full-stack development, machine learning, and AI-driven solutions. Currently pursuing a Master's in Artificial Intelligence, I focus on building scalable applications and deploying machine learning models to solve complex problems."}),(0,m.jsxs)(pe,{children:[(0,m.jsxs)(he,{"data-aos":"fade-up","data-aos-delay":"300",children:[(0,m.jsx)(ge,{children:"7+"}),(0,m.jsx)(xe,{children:"Locations"}),(0,m.jsx)(ye,{children:"Deployed AI solutions"})]}),(0,m.jsxs)(he,{"data-aos":"fade-up","data-aos-delay":"400",children:[(0,m.jsx)(ge,{children:"50%"}),(0,m.jsx)(xe,{children:"Efficiency"}),(0,m.jsx)(ye,{children:"Through automation"})]}),(0,m.jsxs)(he,{"data-aos":"fade-up","data-aos-delay":"500",children:[(0,m.jsx)(ge,{children:"87%"}),(0,m.jsx)(xe,{children:"Accuracy"}),(0,m.jsx)(ye,{children:"In ML models"})]})]})]})]}),(0,m.jsx)(Y,{}),(0,m.jsx)(ie,{}),(0,m.jsx)(oe,{heading:"Interested in working together?",subheading:"Let's discuss how my expertise in AI and software engineering can help your next project.",buttonText:"Get in Touch",buttonLink:"/contact"})]})]})}}]);
//# sourceMappingURL=342.1e2668dd.chunk.js.map