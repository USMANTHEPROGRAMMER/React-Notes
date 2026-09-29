Sabse pehle hum smjhenge ke Why and What is React JS?

Q: What is React JS?
A: React ek JavaScript Library hai
---(Framework nahi — yaad rakhna)
---Made By META

Simple Definition:
React ek library hai jo fast, dynamic aur interactive UI banane ke liye use hoti hai

React ka core concept:
Component-Based Architecture

Component kya hota hai?

Socho LEGO blocks:
Navbar = ek component
Card = ek component
Button = ek component

Sab chote pieces milke ek bada app banta hai

Now Before Moving onto the React humen Import and Export ko smjhna bht zrori hai.
Here is the Path for Learning Import and Export in Detail:
G:\NEW STARTING\Learning\JAVASCRIPT\Side Topics to Learn\Import and Export

Now ab hum Learn krenge Real DOM VS Virtual DOM

sabse pehle hum Baat krenge Real DOM ki:
Real DOM hmara ek Browser ka Structure (HTML ka Tree) hota hy ab kia hota hai hum koi Web pe Changes krte hain to Pura DOM dubra Rerender hota hai isse Perfomance Slow or Bakwas hojaati hai or Overall User experience bhi khrab hota hai.

ab Virtual DOM ki baat krenge:
Virtual DOM hota hai hmra ke ek Copy hoti hai Real DOM ki hmari (Memory main)
React kya krta hai ke:
Main UI likhta hoon in JSX
Reach hmara Virtual DOM Create krta hy
then jab hum koi Changing krte hain to:
OLD VS NEW Compare krta hai
Sirf Changed Part update krta hai
Pura Page Reload nahi krega jisse Overall User Experience kharab nahi hota hy.

Now ab hum bat krenge JSX ki:
JSX ka Simple sa matlab hai:
HTML + JS

Simple Definition:
JSX ek syntax hai jisme tum UI ko HTML jaisa likhte ho, lekin wo JavaScript hota hai

ab hum krenge Suit Up Wut Up means Setting Up React with Vite:
uske liye humen kuch Cmnds chalne hoti hai
npm create vite OR npm create vite@latest (For Latest Version)
then wo kuch Question poochega krne han unko or agar node modules ka Folder na ho to humen ye cmnd chlani hai:
npm i OR npm install
then npm run dev for Local Host

iski Folder Structuring maine Blip main share ki hui hy.

ab hmare paas ek cheez hoti hai JSX main Fragments
Fragments means agar humen mutliple chezen Return krwani hai to hum usko Fragments main Wrap krdete hain
here is how it looks: and yeh cheezon ko contain krne ke kaam ate hain
<></>

ab hum smjhenge ke Folder Structure main gitignore kia hota hai:
ab main chahta hoon ke kuch Files Github pe Upload na ho jaise hmara node-modules to hum gitignore main woh cheeezen rkhte hain jo hmare kaam ki nahi hoti hai like hmare kaam ki to hai lekin github pe upload na ho

ab hum prhenge React JS ka Imp Topic Components:
Components ==> means UI ka ek reusable Piece/Block.
React main hum poori Websie ko Giant File main nahi bnate hain. Hum usko Small Reusable Components main Divide krdete hain.
hmare paas Components Basically ek Function hota hai and iska First Letter humesha Capital se Start hota hai.
or Components ko hum aise Call krate hain:
<App />

ab Real baat krte hain ke hum Real Industry World main Components ko App.jsx main nahi bnate hain hum ise Seperate Files main bnate hain. or hum kabhi kabhi Seperat Components ke liye hum Dedicated CSS ki Files bhi bnate hain.

Sarthak Bhaiya ne ek aur cheez detail main smjhayi hai instagram ki ke stories ka Template Same hota hai almost har cheezon ka template same hi hota hai to yahan par humare Components Work krte hain ek dafa Component bnao or baar use baar use krte jao or Data change krne ke liye hum Props ka Use krenge.

ab hum smjhenge components location:
usse pehle hum smjhenge Components hum components ko src folder main ek folder bnake named as "Components" bnayengy or agar koi kuch bara Component hoa to uski CSS Fil bhi bnayegngy

ab hum smjhenge Props/Props Drilling:
Props ==> Parent Component se Child Component ko Data bhejna
Props hum tab use krenge jab humen kisi cheez ko Dynamic banana ho like hum ek hi Component main Multiple Data chahte hain jab hum Props ka Use krenge
ab jaise hum JSX likhte hain in App.jsx to hum jaise Attribute likhte hain waise hi wahan par likhenge to unhi properties ko hum Props kehte hain.
or Props humen Object means Key - Value Pair main recieve hota hai.
or agar humen kabhi number ya Boolean Value Pass krni ho to wo hum Curly Braces ke through krenge. or hum log Property ka kuch bhi name deskte hain.

agar humen kabhi kisi Element ya Component ko Unique ID Pass krni hoi to hum index ka use krenge using Map Function.

mujhe Sarthak Bhaiya ne ek Method btaya hai for Writing CSS in like jaise humen Dedicated CSS likhni hai for Different Components to hum kia krenge ke SRC ke andar ek Folder bnayengy Components ke name se or uske andar Dedicated Components Folder bnayangye like Navbar, Cards e.t.c. then hum uske andar Component FIle bnayangye with EXtension of .jsx and then ek CSS ki ek File bnayengy magar CSS Extension se pehle module use krenge like this Card.module.css

ab hum prhne wale hain Tailwind CSS and for that we have to Firstly Install it.

ab humen sabse pehle yeh cheez smjhni paregi ke humen kabhi bhi direct website se interact nahi krna balke humne React ka use krna hai in Everyth kyun ke React humare kaam ko zyada Efficiently krta hain Fr.

Now we 'll Jump onto Hooks the Most Important Part of React..
Hooks ==> React ke special functions jo component ko extra powers dete hain.

sabse pehle hum log seekhenge useState Hook
useState ==> Component ke andar aisa Data jo Change hosakta hai or jis ke Change hone par UI Update krna hoo.
like jo hum Variables JS main bnate the wohi same cheez hum using useState krenge ismain hum Strings, Booleans ar cheez krskte hain. or agar humen ye Use krna hai to humen import krna parega useState using {} (Curly Braces). hum 2 Variables ko apni marzi ke name deskte hain.

ab hum log smjhenge is ke Syntax ko, aisa hota hai iska kuch Syntax:
const [First, Second] = useState(Initial Value)

ab useState humen ek Array Return krta hai jismen 2 Cheezen hoti hai:

jo humara First hai ye humara hai initialValue like we Assign any value to Variables in JS. And yeh Read-Only hota hai.
ab jo Second hai humara ye ek Function hai jo Initial Value ko update krne ki Taqat rkhta hai. means jab bhi humen Value Update krni ho to humen to hum ise call krte hain or iske andar hum nayi Value Pass krte hain.

ab humare dimaagh main ek sawal hoga jo ke bht zrori hai bhi hai personally:
ke hum ek normal Variable kyun nahi bna lete hain?
Ans: agar hum Normal Variable use krenge or button dabane par chahte hain ke koi changing ho to JS ki memory main to Value badal jayegi lekin Screen par nazar nahi aayegi this is why we use Hooks(useState)
ab jab hum log useState ko Call krte hain means jab hum Update krte hain to React humara 2 kaam krta hai:
Memory main 1st Variable ki Value Update krdeta hai.
Poore Component ko dubara Re-Render krta hai taake new Value screen par Foran Reload hokar and Update hokar nazar ajaye.

ab ek aur cheez hai in useState or wo yeh hai ke agar main 2nd Variable ko Call krke jo purani value thi wohi daal rha hoon to React use Ignore krdega like this:
const [varone, vartwo] = useState(1)
vartwo(varone)
to React is cheez ko ignore krdega.

ab hmare paas 2 ways hain for updating the value of useState:

1. agar humaare paas obj/arr hai to hum kia krenge uski ek Copy bnalen using Destructuring or usi copy ko update krke newState ko Update krden
2. ek hota hai Arrow Function wala tareeqa for this

ab hum smmjh lete hain ke how Components Re-Redner in React:
ab like humne ek Chota sa Component bnaaya of Counter,
ab First Render hoa pehle ab jo bhi humne Function ke andar likha hota hai wo Execute hojata hai.
then humne koi Funcionality kri like Clicking the Button to Add Count with + 1 to React ne dekha ke bhai State to badal gyi hai from 0 to 1 to React us Component means us Function ko Re-Redner krta hai, or jo bhi Updated cheez hoti hai wo Browser main dekha deta hai.

Q: Component Re-Render hone par andar kia hota hai ?
Ans: Top to Bottom Execution means us Function ki Line 1 se lekar return Statement tak jitna bhi code hota hai wo Again Run hota hai.
Variables Re-Declare hote hain kyun ke Load hone ki wjh se Variables Destroy hojaate hain.
lekin useState ek aisi Wahid cheez hai jo Re-Render hone ke bawajood bhi purani Value zaya nhi hoti balke usko Update krdeti hai.

ab hum prhenge Two Way Binding in React
Two Way Binding ka matlab hai ke Input Field or State ka ek doosre ke saath(Sync) jurra hona zrori hai.
Way1 ==> (State to Screen) jab State badlegi to, Screen par likha hua Text apne aap badal jayega.
Way2 ==> (Screen to State) jab user Input Field main kuch Type krega to State apne aap Change hojayegi

isko chalane wale 2 main Structural main Pillars hain:
Value ==> State to Screen (Value Binding)
onChange ==> Screen to State (Event Binding)

ab yahan pe humari Value ka kaam hai ke ye lock krdeta hai input ko ke tumhe input ke andar sirf wohi cheez dekhegi jo useState wale First Variable means Text main Save rahegi.
hum yahan pe First Variable isliye dete hain ke usi main hmara Actual Data Save hota hai Second Variable is Just a Function to change or Update the Value of First Variable.

ab onChange humara yeh kaam hota hai uska ke jo bhi humare paas jo bhi hum Input main One Character Type krte hain to ye Function chlta hai or Event.Target.value wo Character nikal kar setText() ko dedeta hai or wo setText, text ko Update krdeta hai or Compnent Again Re-Render hota hai or Value wala function Update hojata hai or ye Saara Game 1Milli Second main hota hai isliye humen pata nahi lagta hai or na hi then User Experience khrb hota hai.

Now Sarthak Bhaiya ne LocalStorage ache se explain krdia hai jo ke maine apne JS ke Learning Point pe ache se Learn krlia tha so far.

Now we are Learning of API Calis in React:
ab humari Website 2 cheezon se bnti hai ek Frontend and ek Backend
Frontend means huamra UI jo huamar User Experience krta hai
Backend humara website ki Back ki cheezen hoti hain like Databases

Sabse pehle tun humen smjhna parega ke What is Actually API?
API Stands For "Application Programming Interface"
Simple Words main:
API ek bridge / messenger hai jo tumhari application ko kisi doosre system ke data ya functionality se communicate karne deta hai.

Another Definition with Simplicity:
API ek interface hai jo frontend aur backend/services ke darmiyan communication establish karta hai, jiske through application data request ya send kar sakti hai.

or API ke andar huamre paa ek cheez hoti hai Fetch this is uses for making request to that particular API.
Learning Axios for API-Calling.

Now, ab hum useEffect seekhenge:
useEffect humare paas ye bolta hai ke "Component Render hone ke baad yeh kaam krna."
sabse pehle kia hota hai ke Component Render ==> UI Apears ==> useEffect Runs ==> Side-Effect kaam
useEffect wo hota hai ke koi aisa kam jo Side-By-Side horha ho

ab hum smjhte hain ke Side-Effect kia hota hai:
React Component ka main kaam yeh hota hai: State/Props ==> JSX ==> UI
lekin Component ko UI Render krne ke ilawa kuch External kaam bhi krna hota hai.
For Example: API call karna, Timer start karna e.t.c
in kaamon ko Generally Side-Effect kaha jata hai.

Side-Effect ko hum Simple Examples se smjhte hain:
like agr mujhe koi API Call krani hai to ==> API Call huamara ek External Operation hai.
isko Directly component ki Body main rkhna Generally Problematic hoskta hai. Kyun?
because React Component Multiple times Render hoskta hai. To API Call bhi Repeadetly chl skti hai.
yahan pe aata hai humara useEffect hum ueEffect ke through kia bolrhe hain ke bhai pehle tu Component Render krde phir ye API Call krdena theek?

humare pass useEffect ka Syntax bhi bht Clear and Easy hai:
useEffect(() => {
// Effect
})

ismen 2 main Parts hote hain:
useEffect(
() => {
// What to Do?
}

    [] // When to run?

)

Part-1: Kya kaam krna hai?
Part-2: Kab kaam krna hai? (aur ye Dependency Arr kehlata hai)
agar hum log dependency ke andar kuch nahi likhenge to ye har render pe Effect chlega.
or agar hum kisi State ka Variable is arr ke andar likhden to ye har dafa chlega i mean jab State Update hogi so Far.

Now ab hum React Router Learn krenge ke React main routing kaise hoti hai:
Q: Sabse pehle to hum ye smjhenge ke React-Router ki zrort kyun pari hai?
A: Normal Website main humare paas ye Pages hote hain:
Home
About
Contact
Products
Profile

Agar User:
example.com/contact ==> main jaaye to Contact ka Page ajaye
lekin React humara ek Single Page Application(SPA) Support krta hai
Matlab Browser main Generally ek hi HTML Page Load hota hai, aur React us Page ke andar Different Components Render krta hai.
so Humen ek System chahye jo kahe:
URL Component

/ → Home
/about → About
/contact → Contact
/products → Products
/profile → Profile
Ye kaam humara React-Router krta hai.

ab hum Simple Words main smjhenge ke React-Router kia hai:
React Router is a Library that allows us to Create Navigation and Multiple URL-Based Views/Pages in a React Application.
Router decide krta hai ke:  
URL ==> konsa Component Render hoga.

Router ka Kaam?
User kis URL par hai? Uske according konsa component dikhana hai?

iski Installation bhi Damn Easy hai just Run the Command ==> "npm i react-router-dom"

React Router humn Multiple Tarkeee Routers deta hai sabse Common and Useful ye 3 hain:
BrowserRouter ==> Sabse Zyada hum yehi use krenge (Give Capabilities of Routing)
Routes ==> Container for Routes
Route ==> Actual Routing

BrowserRouter ==> ko use krne ke liye humen sabse pehle isko Import krna parega inmain.jsx and then main.jsx ke andar jaake isko "App" Component ke andar Wrap krna parega. Broswer Router ka Simple sa kaam hota hai ke humare React Application ko Routing capbilities Provide krta hai. ab agar humen ise Actual use krna hai to humen iske liye banane parenge Routes.

ab Browser Router to humne lagadiya jiska sirf ye use tha ke usko Capabilities Provide krna. and Routes humara ek Routes ka Container hai. ye hum log App.jsx main sabse pehle isko Import krwayenge then use krenge this is how it works:
Routes
|
├── Route
├── Route
├── Route
└── Route

ab hum ne Container bnaliya jismen hum Route ko Wrap krenge ab now hum Actual Routing krenge using Route,
Ab Route ke andar humen 2 cheezen deni hoti hai ek hota hai "Path" or ek hota hai "Element"
Path ==> humara hota hai URL in my case ill Enter like this "/"
Element ==> kia Render krna hai in my Case if i want to Render ill do Like this "<Home />"

ab itna krne ke baad humen Route bnaliye hain and jab main apna Search Bar ka URL Change kronga to hum usi Component pe Land hojayengy.

Acha ek aur baat yeh thi ke like jo humne Code likha hoga App.jsx main wo sab Components main Apply hoga like hum chahte hain ke jo humara Nav-Bar hai wo saare Pages pe aaye to humen usko App.jsx main banana parega for that ke wo har Page pe aaye and hum chahte hain ke koi cheez sirf usi ke Component main aaye to hum usi Component main wo Cheez Add-On kreni paregi!

ab agar hum chahte hain ke hum khud URL Type na kren jaise ke humare paas Aam Pages pe hota hai to humen uske liye React-Router-DOM khud hi ek cheez deta hai jise hum kehte hain <link>

ab hum smjhenge the Difference Between Link and a Tag kyun ke main HTML ke BG se arha hoon to:
Difference hai ke:
Normal <a> Tag Browser ko new Page Request/Load bhejta hai jisse humara Page Load hojata hai (Means Refresh) hum yeh cheez nahi chahte hain hum SPA(Single Page Application) banana chahte hain.
And React-Router ka <Link> client-side Navigation krta hai.
isliye React-Router main interval Navigation ke liye generally <Link> use krte hain.

ab agr hum chahte hain ke hum Routing bhi Perform kren and Reload bhi na ho to and hum Manually Link na Daalen to Best Approach hai ke <Link> Tag Use kren.

ab hum Baat krte hain Folder Structure:
Real Projects main hum Components ko Sepperate Folder main rkhenge
src/
│
├── components/
│ └── Navbar.jsx
│
├── pages/
│ ├── Home.jsx
│ ├── About.jsx
│ └── Contact.jsx
│
├── App.jsx
├── main.jsx
└── index.css
humara kuch aisa Structure rahega.

ab hum smjhenge ke is cheez ko kaise manage kren ke jab humara User koi aisi URL Enter krta hai jo humare kisi bhi Route se Match nahi hota to uske liye hum Catch-All-Route(path="_") bnate hain. "_"(asterisk) ka matlab hota hai WildCard yani jab koi Upar wala koi Bhi Route match na ho to ye wala Trigger hojaaye. upar wale Match na ho to yeh wala Trigger hojaaye means hum isko Route ke bilkul aakhir main bnayengy.
iska Full Step:
sabse pehle hum ek Component bnalenge ke Actual humen dekhana kia hai User ko in Err Page
then hum App main jayenge jahan saare Routes hain uske aakhir main ye Asterisk("\*") laagdenge in path and elem ke liye humen us component ka name likdenge like <ErrorPage  />

ab hum ek Important Concept Smjhenge in Router which is Nested Routing
like humne kuch website dekhi hongi well take Example of Clothing Brand to usmen ek Collection ka Dashboard hota hai and us Dashboard main Gender-Wise bhi Collection hota hai this is how that looks:
usmanghani.com/collection/mens
ise hum kehte hain nested routes
isko krne ke liye humen yeh krna prega:
ke like humen ek Collection ka Route bnaya
then usmain hum chahte hain ke 2 Collections bnwayen ek Clothing and ek Fragrances
to hum jab Route bnayenge to use Self Closing wala Tag nahi bnayengy balke Paires-Tags bnayengy
aur us Paired Tag ke andar hi hum Route bnayengy lekin This Time hum Path main "/" nahi likhenge jaise hum log krte thy na ke /about to waise nahi krenge balke jo bhi humen Child ka Link/Route bnwana us ko Direct likhdenge without using "Slash" kyun ke hum Parent Container ke Andar child ko bnwarhe hain na thats why element mian to hum simply Component ka Name likdenge wo to as it is Self-Closing hi Use krenge As Usual

yeh cheez to hogyi humare paas ab nested routing main huamre paas ek cheez bht useful hai jo ke hai "Outlets" given by Default from React-Router-DOM we just have to import it manually.
like ab jaise humne Apne Collection wale Page main thora sa Content likha lekin ab humen dekhna paega ke humara Child kahan Render hoga like usman.com/collection/fragrances ka Data to usi ke liye hum <Outlet> use krte hain jo batata hai ke Child ka Data kahan ayega.

ab hum smjhenge Dynamic Routes:
Dynamic Routes ka matlab hai ke ab jaise maan lo mere paas 100 Users hain to ab kia hum individually sabke Path bnaynegy ofcourse noo to uske liye hum to uske liye hum Dynamic Prameter use krenge:
"<Route path="/users/:id" element={<User />} />"
":id" means yahan koi bhi Value aaskti hai
so agar hum users/usman bhi likhon to wo bhi work kryga or then mujhe element ke andar jo component hoga wo render krdega.

ab humare paas ek query aayegi ke user ne jo id use ki hai wo kaise nikalen uske liye humen React Router ek cheez provide krta hai jise hum "useParams" kehte hain.
ab ek humara dimaagh main query aeygi ke useParams kahan use kren to useParams hum wahan use krenge like humne jaise us Route main jo bhi Element pass kia hoga wahan par hum useParams ka Use krengey.
iske Common Real World Use Cases hain ke:
jaise hum Ecommerce RPoducts bnate hain like humne Prooduct daali like usmanghani.com/product/123 to ye jo 123 ya phir koi bhi number hoga isse hum axios ki madad se API de Data Fetch krwalenge smjhe this is the One of the Real World Use of useParams in Dynamic Routing.

Now ab hum learn krenge useNaviagate:
ab kia hota hai ke kabhi kabhi humen Programically Page Change krna hota hai to hum useNaviagate ka use krskte hain.
Real Life Use Cases hain ke:
like humare paas ek Login Page hai or hum chahte hain ke jab user sarri Information daale or wo correct ho to hum use Dashboard par bhejden.
iske liye hum useNaviagate ka use krenge.
navigate use krne ke liye humen sabse pehle isko Import krna parega. then ek Variable main Store krengy then us Variable main function call krenge jo humne import kraya tha. and jahan bhi humen use krna ho wahan hum use krskty hain. hum isse back and next wali functionality bhi achieve krskte hain.

ab hum sochenge ke yeh kaam Link se bhi to hoskta hai, bilkul haan yeh kaam hoskta hai but agar main programically Page Change krna chahoon to hum useNaviagate ka use krenge. or yehi Best Approach hai or isse hum then Next and Previoius Page wali Funionality bhi achieve krskte hain. jo ke bht Useful hai.

ab hum ek aur main Topic shuru krne lage hain ho ke hai React Context API:
sabse pehle to hum smjhenge ke React Context API ki zrort kyun pari hai?
imagine mere paas ek Website hai or usmen ek User ka Data Store hai, Aur tum chahte hain ke user ka data
Navbar mein
Profile mein
Dashboard mein
Settings mein
Sidebar mein
Footer mein
in sab Compoonents main show ho to hum Normally React main kia krengy ke:
Props ke through Data bhejenge like mujhe Footer main Data chaye aur agar beech main kisi Component ko User ke Data ki Zrort nahi hogi to use bhi Recieve krke Aage bhejna parega is Problem ko hum kehte hain "Props Drilling" or isse hum bachne ke liye hum React Context API ka use krenge.

ab hum thora Props Drilling ka bhi Overview lelete hain:
like UserInfo ko User chahye lekin humen UserInfo tak phonchane ke liye har jagah props pass krne parenge.
this is Called Props Drilling.

Before Moving onto the React Context API hum isse pehle Chidren as Props ko smjhte hain:
React me "Children as Props" Kya Hai?
Jab hum kisi React component ke opening aur closing tag ke beech me koi content, HTML tags, ya doosre components ko paas karte hain, to React us content ko automatically ek khaas prop me pack kar deta hai jise hum "children" kehte hain.
ab hum bat krte hain Code Strucutre and Usage Example:
Suppose humara paas ek Card Component hai or hum chahte hain ke is Card Component ke andar ka Content alag alag jagah badal sake(Dynamic ho).
like humne App se Card Component bnaya or jab hum Component ko Call krenge to Closing Tag use nahi krenge balke humen paired tag use krne ke liye humen Content ke andar jagah props pass krne parega. Then Card Component ke Andar Props Recieve krlenge. or agar hum log multiple Cheezen Send krenge to wo Array ki format main jayega. to isse humare liye Dynamic cheezen banana Easy hojata hai.

hum log smjhenge ke React Context API ka Basic Idea, Context API kehta hai ke:
Bhai Data ko har Jagah Pass krne ki Zrort nahi hai ek Common Place bana do Jahan Data ho aur jis kisi ko Data Cahye hoga wo wahan se lelega. ye humen ek Global Storage bnake dedeta hai jo ke koi bhi Component Access karskta hai.

ab Context API ki Definition smkjhenge:
"Context API React ka built-in mechanism hai jo data ko component tree ke multiple components ke saath share karne deta hai without manually passing props through every level."

iska matlab yeh nahi hai ke ab hum Props use nahi krenge, balke Context ka Purpose hai ke Certain Shared Data ko Easily Access krwana.

Context API ke humare paas 3 Main Parts hain or yehi Context API ke Core Concepts hain:

1. createContext() ==>
2. Provider
3. useContext()

hum ab smjhte hain ke Context API ko Actually bnate kaise hain:
Context API ke 4 Simple Steps hain:
Step 1: Storage Box Banao ---> createContext()
Step 2: Box me Data Bhar kar ---> <Context.Provider value={...}>
App ko Lapeto (Wrap)
Step 3: Component me Data Nikalo ---> useContext()

hum Proper Steps Smjhennge for Context API:
Sabse pehle to hum ek File bnate hain for Making Context humara poora Global Data ek hi jagah Safe rhe. is File main hum 2 Cheezen bnate hain:
sabse pehle main us File ka code bhejta;

// src/context/UserContext.jsx
import React, { createContext, useState } from "react";

// STEP 1: Khali Context Box create kiya
export const UserContext = createContext();

// STEP 2: Custom Provider Component banaya ==> This is Our Provider Component
export const UserProvider = ({ children }) => {
// A. Local State banayi jo Global banne wali hai
const [user, setUser] = useState({ name: "Usman Ghani", isLoggedIn: true });

// B. Logic Function jo state update karega
const logout = () => {
setUser({ name: "", isLoggedIn: false });
};

return (
// C. UserContext.Provider Component return kiya
<UserContext.Provider value={{ user, setUser, logout }}>
{children}
</UserContext.Provider>
);
};

A. Provider Component Kyun aur Kis Liye Bana?
Problem: Normal createContext() sirf ek khali "Box" banata hai. Us Box ke andar real data (jaise useState variables aur functions) ko live rakhne aur baki components tak broadcast karne ke liye ek Wrapper Component chahiye hota hai.

Role: Provider Component ka kaam hai State ko hold karna aur us state ko {children} ke zariye sabhi child components me baantna.

Breakdown of Terms:
UserContext.Provider: Ye React Context Box ka asli "Broadcast Tower" hai.

value={{ user, setUser, logout }}: Is attribute ke andar hum wo saara saman daalte hain jo baki components ko dena hai. (Object format me pass hota hai).

{ children }: Ye "Children as Props" hai. Iska matlab hai <UserProvider> ke andar jo bhi tags ya components aayenge (jaise <App/> ya <Navbar/>), wo {children} ki jagah fit ho jayenge.

ab hum smjhenge ke Components main Data kaise Consume hota hai:
Jab main.jsx me wrap ho gaya aur UserContext.jsx ban gaya, to kisi bhi child component (jaise Navbar.jsx) me data nikalne ke liye useContext hook use hota hai:

ab hum ek dafa Provider ka Scope smjhlete hain: -- Very Important
Context sirf un components ko available hota hai jo Provider ke andar hain.
<UserContext.Provider value="Usman">

  <Navbar />
  <Profile />

</UserContext.Provider>

Navbar and Profile hi humara Context Access krskta hai lekin agar Footer hoga or wo Provider se bahar hoga to wo Context Access nahi krpayega.

Context main hum sirf String nahi balke kuch bhi dekhste hain or jahan use krna ho wahan hum useContext ke Through Access krlenge.

Final Mental Model

Bro agar main Context API ko sirf 4 lines mein explain karun:

Props:
Parent → Child → Child → Child

Problem:
Prop Drilling

Context:
Create a shared context

Result:
Deep component directly shared data access kar sakta hai 🚀

Aur actual React syntax:

// 1️⃣ Create
const UserContext = createContext();

// 2️⃣ Provide
<UserContext.Provider value={user}>
<App />
</UserContext.Provider>

// 3️⃣ Consume
const user = useContext(UserContext);

ab jo humare Remaining Hooks bache the ab wo smjhenge:
sabse pehle hum smjhenge useRef Hook:
useref React main kisi Value ko yaad rkhne ke liye hota hai, lekin us Value ko change hone par Component ko Re-Render nahi krta. And React component ke andar kisi DOM element ko directly access karne ke liye bhi hota hai.
useRef ko ek BOX samjho

Golden line:

useRef = "Mujhe kisi cheez ka reference/value yaad rakhna hai, lekin uske change par React ko re-render nahi karwana."

Ye mental model bohot useful hai:

useRef()
↓
┌─────────────┐
│ .current.   │
│             │
│ value       │
└─────────────┘

useRef tumhe ek object deta hai jiske andar ek special property hoti hai:

.current

Matlab:

Jo cheez tum useRef mein rakhoge, woh .current ke andar milegi.

.current kyun?

React ne basically ek container diya:

Ref
│
└── current
│
└── tumhari value

Isliye useRef ko samajhte waqt:

Ref ka box = .current

yaad rakho.
Isko ek simple question se decide karo

Jab bhi confusion ho:

"Agar ye value change hogi, kya mujhe screen update karni hai?"

YES:
useState
NO:
useRef

Ye rule bohot kaam aayega.

useRef ko use krne ka Structure:

1. IMPORT
   ↓
   useRef

2. CREATE
   ↓
   const ref = useRef(initialValue)

3. USE
   ↓
   ref.current

4. CHANGE (agar zaroorat ho)
   ↓
   ref.current = newValue

Now ab hum krenge useReducer Hook:
useState useReducer ka Replacement nahi hai Dono State Manage krte hain bas useReducer Complex State Logic ke liye Use hota hai.

useReducer ka Simple Idea hai:
useReducer kehta hai:
"Tum mujhe batao kya action hua, main decide karunga ke state kaise change honi chahiye."
dispatch()
↓
ACTION
↓
REDUCER
↓
New STATE
User ne + button dabaya
↓
dispatch({ type: "INCREMENT" })
↓
reducer
↓
count + 1

ab hum seekhenge custom Hook:
humare paas already Built-in React ke Hooks hote hain ab imagine kro ke ab koi kaam hai or main woh repedeately krrha hoon aur woh cheez agar mujhe multiple Components main chahye to, if mujhe ek Logic Mutiple Components main chahye to humen yeh krna prega keek hi kaam baar baar likhna parega Custom Hooks isi cheez ko Solve krta hai humara.
Custom Hook actually kya hai?
Simple definition:
Custom Hook ek normal JavaScript function hota hai jisme hum React Hooks ko use karke reusable logic bana dete hain.

Example:
function useSomething() {
   // React Hooks
   // logic

   return something;
}
Aur ek important rule:
Custom Hook ka naam "use" se start hona chahiye
Custom Hook banate hain
function useCounter() {

  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  function reset() {
    setCount(0);
  }

  return {
    count,
    increment,
    decrement,
    reset
  };
}

Ye hamara Custom Hook hai:

useCounter()

⚠️ Ek VERY important baat

Custom Hook component nahi hota.

Ye:

function useCounter() {
   ...
}

ek function hai.

Aur iska kaam usually:

Logic manage karna
      ↓
values/functions return karna
      ↓
Component unko use kare

Custom Hook khud UI render nahi karta.

custom Hooks ke andar hum log Hooks bhi use krskte hain.
aur isi liye ye "use" se start hota hai.

ab hum krenge React Forms:
jab user se Information ya koi Data lena ho to hum Forms use krte hain.
React mein forms ka important point ye hai:
React ko input ke andar user ne kya likha hai, uska pata hona chahiye.
Form
 ↓
User input leta hai
 ↓
React mein input ki value usually state mein rakhte hain
 ↓
onChange se state update hoti hai

ab hum krenge Controlled Components:
jo ke bht link krta hain with Forms Controlled Components ka Simple Matlab hai:
input ki Value ko React State Control krrhi ho.
One-line definition:

Controlled Component = A form input whose value is controlled by React state.
🟡 Isliye "Controlled" kyun?

Because React basically keh rahi hai:

"Input ki value tum khud independently manage nahi karoge. State decide karegi input ke andar kya value hai."

React State
     ↓
   controls
     ↓
   <input>
❌ Controlled nahi hai

Agar tum simply likho:

<input type="text" />

React state input ki value control nahi kar rahi.

Ye controlled component nahi hai.

✅ Controlled hai
const [name, setName] = useState("");

<input
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

Ab React ke paas input ki value ka control hai.

🚀 Controlled Components useful kyun hain?

Sabse bada faida:

React ko input ki value pata hoti hai.

Is wajah se tum easily:

validation kar sakte ho
submit par data le sakte ho
error messages show kar sakte ho
input ko conditionally control kar sakte ho
form data ko state mein combine kar sakte ho

Example:

Email: [usman@gmail.com]

Password: [********]

        ↓

React State

{
  email: "usman@gmail.com",
  password: "..."
}

Phir submit hone par React ke paas data already available hai.

ab hum krenge Lifting State Up:
🟢 Lifting State Up

Sabse pehle one-line definition:

Jab 2 ya zyada components ko same data/state chahiye ho, to state ko unke common parent mein move kar dete hain. Isko Lifting State Up kehte hain.
🎯 Lifting State Up kab karte hain?

Jab:

Multiple components ko same state/data share karna ho.

now ab hum Composition Learn krenge.
Composition ka matlab hai Components ko chote Re-Usable pieces ki tarah combine krke bigger UI banana.
Simple words mein:

Small Components
      ↓
Combine
      ↓
Bigger Component / UI

Problem kia Solve krrha hai:
Imagine tumhare paas ek Card component hai.

Tum chahte ho ke Card ke andar kabhi:

Image
Title
Button

ho.

Lekin doosri jagah Card ke andar:

Icon
Heading
Paragraph

ho.

Agar tum Card component ko hard-code kar doge:

Card
 ├── Image
 ├── Title
 └── Button

to Card bohot limited ho jayega.

Composition kehta hai:

Card ko decide mat karne do ke andar kya hoga. Parent ko content provide karne do.
🔥 Sabse important tool: children

React mein Composition samajhne ke liye children bohot important hai.

Example:

<Card>
  <h2>Hello</h2>
  <p>Welcome!</p>
</Card>

Yahan Card ke opening aur closing tag ke beech ka content:

<h2>Hello</h2>
<p>Welcome!</p>

automatically children prop ban jata hai.
🚀 Composition sirf children nahi hai

Composition ka broader idea hai components ko combine karna.

For example:

function App() {
  return (
    <Layout>

      <Navbar />

      <MainContent />

      <Footer />

    </Layout>
  );
}

Yahan:

Layout
 ├── Navbar
 ├── MainContent
 └── Footer

Layout reusable structure provide kar raha hai.

now ab hum krenge useForm Hook along with that we'll also Cover Zod Validation.
sabse pehle hum smjhenge ke React Hook Form kia hota hai:
React Hook Form ek library hai jo React ke forms ko manage karna easy banati hai.
kaam to hum manually bhi krskte hain lekin agar Large Data ya hum Cleaner Code and Sytax chahte hain to hum RHF ka use krenge.
isko use krne ke liye humen sabse pehle isko Install krna parega using npm install react-hook-form.
then humen jahan bhi use krna hoga wahan useForm ko Import krna parega and then use krna parega. ye humara ek tareeke se Form Manager hota hai.
const {
  register,
  handleSubmit,
  formState
} = useForm();

ye 3 cheezen sabse zyada Important hain.

"Register" sabse pehla Important Concept:
suppose mere paas ek Input hai, RHF ko kaise pata chlega ke mere paas ek input hai or uska name "Name" hai yahan register() aata hai.
Conceptually:
<input {...register("name")} />
iska matlab:
React Hook Form, is Input ko Email naam se apne form main Regsiter krlo.
ab jaise humne register main "name" likha to yeh kia hai, ye huamri Field ka Name hai
Basically: Register("Field_Name")
6. Multiple Inputs

Suppose form mein:

Username
Email
Password

Tum mentally is tarah socho:

register("username")
register("email")
register("password")

RHF internally form data ko conceptually kuch aise track karega:

{
  username: "...",
  email: "...",
  password: "..."
}
Ye bohot important hai.

ab hum krenge handleSubmit, Form Submit ka Boss:
ab User Form Fill krta hai:
Email:    user@gmail.com
Password: 12345678

        [ Submit ] ==> Button
Submit par RHF ko kehna hai "Form Submit hone par mera Function chlao"

ab hum krenge Validation, ab hum RHF Next Important Feature dekhenge:
Suppose Email -> Required, Password -> Required, Password -> Min Length 10, Password -> Max Length 20.
RHF ke Register() main Rules de skta hoon:

ab jab humne itna krlia hai to formState bhi dekkhlete hain:
ab Question: Error aaya hai to humein pata kaise chalega?
yahan formState ka kaam hai:
Hum commonly:

const {
  register,
  handleSubmit,
  formState: { errors }
} = useForm();

kar sakte hain.

Ab:

errors
 ↓
Form mein kya errors hain?

ab Suppoose humen Email Required hai or user ne Empty chora to error -> mail -> message

ab hum thore register() ke Validation Rules krlete hain jo hum Daily Use krenge:
required -> required(Field Empty nahi honi chahye)
minLength -> minLength:8(Atleast 8 Characters)
maxLength -> maxLength:20(Max 20 Characters)
min -> min:10(Minimum 10) -> For Numbers
max -> max:100(Maximum 100) -> For Numbers
pattern -> pattern:/^[a-zA-Z0-9]+$/(Only Alphabets and Numbers)
validate -> validate:(value) => value.length > 10(Value must be greater than 10)

ismen ek cheez hoti hai in RHF Email Validation Email ki Validation ke liye hum Rigex Values and message dena parta hai lekin hum log Validation ke liye zod use krengy to usko abhi ke liye rehne do to zyada Best rahega for us.

ab hum log seekhenge reset() RHF main Reset krna bhi Simple hai sabse pehle humen form Manager main reset likha hoga then submit ke function hum reset() ko Call kraskte hain without any issues.

humare paas ek aur cheez hoti hai defaultValues 
const {
  register
} = useForm({
  defaultValues: {
    name: "Usman",
    email: "usman@gmail.com"
  }
});
means ke agar humen Input Fields ki Starting Values set krni ho to yeh use krengy.

ab hum krengy getValues() kabhi humen form ki current Values Direct chahye hoon to yeh use krengy sabse pehle getValues() ko useform main likhenge destrucutre way main means object main likhenge then getvlaues ko kisi Variable main Store krayengy then us Valua jo krna ho hum krskty hain.

then humare paas aata hai watch() suppose hum Password ki Value dekhna chahte hain to iske liye use hoga usko bhi useform main desrtructure main likhenge yeh use krne ke liye then kisi Variable main Store krnayega.
const password = watch("password"); ==> Password ki jagah koi bhi Field Name jo bhi hum register() ke through Enter krte hain.

ab hum use krengy setValue() for ke agar humen Programically Value change krni ho to uske liye use krengy.

ab hum krenge zod Validation it is use for ke Data ko Check krta hai ke kia wo humare baataye huye Rules ke hisaab se Valid hai ya nahi?
For example, tum kehna chahte ho:

Name → string hona chahiye
Name → minimum 3 characters

Email → valid email hona chahiye

Age → number hona chahiye
Age → 18 ya usse zyada

Password → minimum 8 characters

Zod mein tum in rules ko ek schema mein define karte ho.

Data
 ↓
Zod Schema
 ↓
Validation
 ↓
Valid ✅ / Invalid ❌

ab hum smjhte hain ke Zod ki Zrort kyun pari like agar humne ek Form bnaya hai or humne us main user ki Email leni hai to Zod Validate krta hai ke kia jo Email hai wo Valid hai ya nahi like agar user ne abc likha to humen for sure error throw krwana parega this is the common use case of Zod Validation.

Zod ko use krne ke liye humen sabse pehle isko Install krna parega using "npm install zod".
then humen jahan bhi use krna hoga wahan useZod ko Import krna parega and then use krna parega.
import krne ke liye humen yeh Line Run krni paregi wherever we have to import that thing up:
"import { z } from "zod";"

ab Z ke through hum Schemas bnayengy:
Schema Zod ka sabse important Cocept hai: Scehma Basically ek Rulebook hy.
const userSchema = z.object({
  name: z.string(),
  email: z.email()
});
Ye schema keh raha hai:

user
│
├── name → string hona chahiye
│
└── email → valid email hona chahiye

Mental model:

Schema = Data ke rules ka blueprint

z.string() ==> value String honi chahye number ya boolean value daalenge to wo error throw krdega.
z.number() ==> value Number honi chahye string ya boolean value daalenge to wo error throw krdega.
z.boolean() ==> value Boolean honi chahye string ya number value daalenge to wo error throw krdega.
z.array(z.string()) ==> array hona chahye or uske andar har item String honi chahye. 
z.object({ name: z.string() }) ==> object hona chahye or uske andar har key name String honi chahye.
Required Fields ==> Zod main Basic Object Properties Normally Required hoti hain.
z.optional ==> Optional Fields, kabhi kabhi Fields Required bhi nahi hoti to uske liye he use kia jata hai.
z.nullaable ==> ye optional() se different hai, optional → value missing/undefined ho sakti hai & nullable → value null ho sakti hai
z.min(10) ==> minimum value 10 hona chahiye
z.max(100) ==> maximum value 100 hona chahiye
z.min(10).max(100) ==> minimum value 10 hona chahiye & maximum value 100 hona chahiye
z.length(10) ==> length 10 hona chahiye
z.literal("admin") ==> Specific Exact Value honi chahye. matlab sirf Admin Acceptable hai.
z.enum(["admin", "user"]) ==> agar limited choices hain to yeh use krengy agar iske ilawa kuch bhi use kria to Error throw krega.
z.date ==> Zod Date Validation bhi Support krta hai. Meaning actual JavaScript Date object expected.
z.number().int() ==> Number honi chahye & Integer honi chahye. Example 10, 10, 10 etc. Not 10.1, 10.01 etc.
z.number().positive() ==> Number honi chahye & Positive Number honi chahye. means > 0
z.nonnegative ==> mtlab sirf 0 ya positive number. Example >= 0

ab smjhenge ke Schema ko Actual Validate kaise krte hain:
Schema banana Enough nahi hai humen isko Validate bhi krna hota hai.
Schema sirf Rules Define krta hai. lekin agar Validate karana hai un ko to humare paas 2 Important Approaches hoti hain:
1. Parse()
2. safeParse()

sabse pehle hum safeParse() ko smjhenge or yehi zyada Easy bhi hota hai.
const result = userSchema.safeParse(data);
kuch aisa inka Syntax hota hai.

ab hum thora sa Deep jaayengy or .refine ko smjhenge:
kabhi humen ek Field ko Doosri Filed ke Against Validate krna ho to uske liye yehi use krenge. (Refine)
Real World Example hai ke humen Password === Confirm Password wali cheez krni hoti hai to hum isi ke through krenge.
Conceptually:
schema.refine(...)

ab hum smjhenge .transform() means ke Zod sirf Validation nahi krskta balke Data Transform bhi krskta hai.
z.string().transform((value) => value.trim())

ab hum Zod and RHF ko Integrate krena seekhenge or yeh chez possible ho paati hai using zodResolver():
zodResolver() ek tareeke se Bridge ka kaam krta hai Between RHF and Zod. Zod resolver ko humen Install krna parta hai using "npm install @hookform/resolvers". then import krne ke liye humen yeh line run krni paregi:
import { zodResolver } from "@hookform/resolvers/zod";

ab hum smjhenge humare ek Topic rehgya tha Previously of useEffect which is Called Cleanup Function 
useEffect main hum na ek Function dete hain this is how it looks:
useEffect(() => {
  // effect ka kaam
}, []);
Lekin ye effect kuch aisa kaam bhi start kar sakta hai jisko baad mein band / clean karna zaroori ho.
uske liye hum return krte hain.
useEffect(() => {

  // START / setup

  return () => {
    // CLEANUP
  };

}, []);

ye return wala function humara Cleanup Function hota hai.
iska Name Clanup kyun?
Real Life main Socho:
fan on kia, kaam khatam hua, fan off OR Timer Start kia Component ki Zrort nahi Timer Stop!

Simple and Basic sa Idea:
Cleanup function basically:
Jo kaam useEffect ne start kiya tha, jab uski zaroorat khatam ho to usko stop/remove karna.
📍 Cleanup kahan kaam aata hai?

Jab useEffect koi ongoing/external cheez start kare:

Effect mein kya start kiya?	Cleanup mein kya karoge?
setInterval()	clearInterval()
setTimeout()	clearTimeout()
addEventListener()	removeEventListener()
Subscription	unsubscribe()
WebSocket	close()
API request	abort() where appropriate

Cleanup Funtion humara Component unmount hone ke ilawa Agar dependency change hone ki wajah se effect dobara run hona hai:

OLD EFFECT
    ↓
CLEANUP
    ↓
NEW EFFECT

Aur jab component completely remove hota hai:

COMPONENT UNMOUNT
       ↓
    CLEANUP

This is Very Useful Things BTW.

aaj se hum Start krne wale hain apni REDUX TOOL KIT (RTK):
sabse pehle hum smjhenge ke Redux tool Kit ki zrort kyun pari hai?
Redux ko agar Simple Words main smjhen to:
"Redux ka main purpose hai application ke shared/global state ko predictable aur organized tareeqe se manage karna."
sabse pehle to hum yeh smjhlete hain ke RTK React ka part nahi hai, Dekho humen na State Manage krne main Problem aati thi in React

humne useState() prha agar Data sirf ek Component ko chahye to useState Enough hai.

Problem Kab Start hoti hai:
ab imagine kro ke humare paas ek Ecommerse App hai or usmen humare paas ek Cart hai or wo Cart ab sab Components ko chahye like Navbar, Cart, Products, Cart Total, Checkout, etc.
yahan Problem Start hoti hai:
Props Driling ki ke agar beech main kisi Component ko Data nahi bhi chahye to bhi use Zabardasti Data Share krna par jata hai yehi Problem hai Props Drilling ki.
ab isi cheez ko Tackle krne ke liye humne Context API prha tha ismen Components Directly Context se Shared Data le skte hain.
lekin Large Application main State Management sirf, Data Sabko Accessible krado itna Enough nahi hota hai.
humein ye bhi Manage krna hota hai:
State
 ↓
State ka structure
 ↓
State kaise change hogi?
 ↓
Kis action se change hui?
 ↓
Different components kaise update honge?
 ↓
Complex state logic

yahan Redux useful hoti hai.

Redux ka Mainly Purpose hota hai ke wo Data ko Centralized krdeta hai to jis kisi ko Component ko Data chahye wo leskta hai. This is the Basic Concept of RTK.

ab hum ek Dafa Redux ka Architecture smjh lete hain:
like ab mere paas ek BTN hai Theme Name ka ab user ne us pe Click kia to Event Dispatch hoa then Action hua then Reducer chla and then jahan hum logon ne Data rkha hua tha wahan ka State Change and UI Update

ab Architecture ke 4 Main Parts:
Store ==> Central Place jahan Redux ka State rkha jata hai.
Action ==> karna kya hai? Action Khud State ko Directly Change nahi krta ha.
Reducer ==> Action aya hai ab State main change kaise hoga, Reducer Basically State Update ki Logic rkhta hai.
Dispatch ==> Action ko Redux tak bhejta hai.
Slice ==> kisi particular feature ki Redux state aur uski update logic ka organized section.
One-line mental model:

Component action dispatch karta hai → reducer state update karta hai → store updated state rakhta hai → component updated state read karke UI update karta hai.

ab hum Actual Code likhenge:
Before Writing any Code, Firstly We have to Install Redux Toolkit:
using this Command ==> npm install @reduxjs/toolkit react-redux

then humare liye behtar yeh rahega ke ek New Folder bnalen in Src Folder names as Redux
aur ismen humen for Sure Store bnana parega by making file named Store.js
then hum is File ke andar configureStore ko import krenge and then ek Store bnayengy using configureStore like this:
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    
  }
});

ab humne yeh Store to bnaliya lekin ab hum chhate hain na ke hum yeh poori Application main kahin bhi Use krsken to uske liye hum ise Import krayenge in main.jsx File.
and Provider ko bhi Import krenge from react-redux then App ko Provider main Wrap krenge and store main hum jis name se variable ka name likha tha wo likh denge so far.

hum log Reducer main apne Slices Baad main Connect krenge.
Slices mainly hum Features ko kehte hain.

yeh saari cheezen hum log baad main krenge pehle hum log ek dafa again and Crystal Clear Way main Redux Architecture smjh lete hain:
1. ab jaise maan lo humari screen par hai ke ek Btn hai "Add to Cart".
2. user ne Add to Cart Button par Click kia means User ne Action kia hai Just.
3. React main Button ka Click ek Event hai user ne Btn par Click kia yahan onClick humara EventHandler hai.
3. ab onClick ke andar hum logon ne ek Function Pass kia hoa tha handleAddtoCart() krke ye jo handleAddToCart() hai ye ek Function hai jo Decide krega ke user ne Add to Cart Click kia hai ab Redux ko Inform krna hai.
4. ab Event Handler ke Andar hum logon ne Redux ko Action bheja. yahan pe humara Kaam ata hai dispatch() ka, dispatch ka kaam hai Action ko Redux System tak bhejna. "Dispatch = "Redux, ye instruction tumhare paas aa rahi hai"
5. ab aate hain Action pe, Action Basically ek Message/Instruction hai. Action ke Generally 2 Imp Parts ko smjhna hai: type: Type Batata hai ke kia hua OR kia krna hai, payload: Payload Batata hai ke kis Data ke Saath hua.
6. ab jo Action hai Reducer tak jaata hai. Reducer ka Kaam hai: Theek Action Aagya hai ab State ko Update kaise krna hai. Reducer decision/logic rakhta hai ke state kaise change hogi.
7. Sate Basically humara Curent Data hai. State humari Application ka Current Data
8. ab ye Updated State Redux Store main hoti hai. Store ko Simple Language main Redux ki Central State Container smjho. Reducer state ko update karta hai aur Store updated state ko hold karta hai.
9. ab Maanlo Navbar main yeh dikhana hai Cart (1) yahan useSelector kaam aayega. useSelector ka Kaam hota hai Store se Required State Read krna.
10. then UI Update.

ab har Function ka One Line Meaning:
| Term              | Kaam                                     |
| ----------------- | ---------------------------------------- |
| **User**          | UI ke saath interact karta hai           |
| **Event**         | User ka action, e.g. click               |
| **Event Handler** | Event ko handle karne wala function      |
| **Dispatch**      | Action ko Redux tak bhejta hai           |
| **Action**        | Batata hai kya hua / kya karna hai       |
| **Payload**       | Action ke saath actual data              |
| **Reducer**       | Decide karta hai state kaise update hogi |
| **State**         | Application ka current data              |
| **Store**         | Redux state ko centrally hold karta hai  |
| **Selector**      | Store se required state read karta hai   |
| **Component**     | State ke according UI render karta hai   |

ab Full Architecture Diagram:
                         USER
                           │
                           │ clicks
                           ▼
                    ┌──────────────┐
                    │    EVENT     │
                    │    onClick   │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    EVENT     │
                    │   HANDLER    │
                    └──────┬───────┘
                           │
                           │ dispatch()
                           ▼
                    ┌──────────────┐
                    │    ACTION    │
                    │              │
                    │ type         │
                    │ payload      │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │   REDUCER    │
                    │              │
                    │ state update │
                    │    logic     │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │    STORE     │
                    │              │
                    │    STATE     │
                    └──────┬───────┘
                           │
                           │ useSelector()
                           ▼
                    ┌──────────────┐
                    │  COMPONENT   │
                    └──────┬───────┘
                           │
                           ▼
                    ┌──────────────┐
                    │      UI      │
                    └──────────────┘

ab hum log Firse New Starting krte hain or phir se saari cheezen smjhte hain:
Part 1:
sabse pehle to humne Install krna seekhlia hai ke Actual Install kaise krte hain.
Part 2:
then Folder Structure ye use krenge:
src/
│
├── app/
│   └── store.js
│
├── features/
│   └── counter/
│       └── counterSlice.js
│
├── App.jsx
└── main.jsx
ab ek ek Folder ka Purpose smjhte hain hum;
app/ ==> ke andar Application Level Redux Setup rakhenge.
features/ ==> ke andar Individual Features likhenge.

Part 3:
then Redux Store Create krenge: (store.js) main
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    
  }
});
using configureStore, ab configureStore() kya karrha hai ke yeh humara Store Create krrha hota hai.
Store ka Purpose: Redux ki State Hold krna 
abhi Store Empty hai:
kyun ke humne koi bhi Slices Create nahi kre.
Reducer Store ke andar kyun ? ==> Store ko batana hai ke state ko manage kaun karega.

Part 5:
ab baat krte hain hum log Provider ki:
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { Provider } from "react-redux";
import { store } from "./app/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);

Provider kyun? kyun ke yeh React Components ko Redux Store tak Access deta hai.
Golden Line:
Provider = React app ko Redux Store available karwana.

Part 6:
ab actual Counter State bnate hain. using counterSlice.js
Slice = kisi particular feature ki Redux state aur uski update logic ka organized section.

Part 7:
sabse pehle hum log Initial State Create krte hain:
meaning State ki Starting Condition using Object.
const initialState = {
  value: 0
};
yeh bht simple hai hum just keh rhe hain ke Count ki Starting Value 0 hai. Application Start Count Value 0.
initial State kyun Redux ko Starting State pata hona chahye.

Part 8:
ab hum log Slice Create krenge: using createSlice() 
Slice Basically Cart ki Redux Related cheezen ek jagah Organize krta hai.
counterSlice
│
├── name
├── initialState
├── reducers

iske andar 3 major things hoti hain:

Part 9:
name ==> Yeh Slice ka Name hai.

Part 10:
reducers ==> reducers: {
  counter: (state) => {
    
  }
}
state ==> Current Cart State
ismen bht simple sa matlab hai reducers ka ke State ko Update krne ki Logic Define krna.
Reducer ko Rul Book smjho is ke andar hum log Rules Define krte hain.

Part 11:
Action kia hai?
humne likha Reducer main:
increment: (state) => {
   state.value += 1;
}
increment humara abhi Action nahi hai.
ye Reducer Case ka Name hai sirf.
Redux Tool Kit isi Name se Automatically Action Creator Generate krta hai.
Action ke andar humari Type hoti hai, type batata hai ke konsa Action hua.

Part 12:
Action Creator
export const { increment, decrement } =
  counterSlice.actions;
yahan counterSlice.actions ke andar RTK ne Automtatically functions bnadiye 
ab Component main hum increment() use krskte hain
Important:
increment
aur
increment()
same cheez nahi samjho.
increment → function/action creator ka reference.
increment() → action object create karta hai.
Conceptually:
increment()
     ↓
{
  type: "counter/increment"
}

ye wali line agar hum log smjhen to humen har cheez amjh ajayegi:
Ek line mein:

Action Creator (increment) ek function hai; usko call karne (increment()) par Action Object banta hai; dispatch() us Action Object ko Redux ko bhejta hai.

Part 13:
export default counterSlice.reducer;
ye Actual Reducer ko export krta hai
kyun ke Store ko yeh Reducer chahye rehta hai.
Flow:
counterSlice
      ↓
counterSlice.reducer
      ↓
store.js
Reducer ko export isliye kar rahe hain kyunki Store ko reducer ki zaroorat hai.
counterSlice.reducer
Store ko chahiye:
"Action aane ke baad state ko kaise handle karna hai?"
Isliye reducer export.
Reducer ka kaam yeh hai ke:
Action aane ke baad State ko kaise update karna hai, ye decide karna.
To Store ko reducer kyun dete hain?
Store ke paas State hoti hai, lekin Store khud nahi jaanta:
"increment action aaye to kya karun?"
Reducer Store ko rules/logic deta hai.
Store
  │
  ├── State rakhta hai
  │
  └── Reducer se poochta hai:
       "Action aaya, ab State kya honi chahiye?"
Isliye reducer ko export karke Store mein dete hain.
Reducer = State update karne ka logic/rule.

Part 14:
ab hum Store main Counter Connect krenge.
import { configureStore } from "@reduxjs/toolkit";

import counterReducer
  from "../features/counter/counterSlice";

export const store = configureStore({

  reducer: {
    counter: counterReducer
  }

});

Part 15:
ab Component ki baari hai:
pehle Redux se State Read krenge using:
import { useSelector } from "react-redux";
useselector() ==> Store se State Read krne ke liye.

Part 16:
useSelector() 
const count = useSelector(
  (state) => state.counter.value
);
Is line ko slowly samjho.
Redux Store:
state
│
└── counter
      │
      └── value: 
Selector:
(state) => state.counter.value
Meaning:
"Mujhe Redux Store ki counter state ke andar se value chahiye."
Result:
count = 0

Part 17:
UI main Show krenge.

Part 18:
ab + Click pe State Change krni hai:
iske liye use Dispatch() ka use krenge.

Part 19:
const dispatch = useDispatch();
useDispatch() humen Redux ka dispatch function deta hai.
Simple:
Dispatch = Redux ko action bhejne ka mechanism.

PART 20
Event Handler
Button:
<button onClick={handleIncrement}>
  +
</button>
Function:
const handleIncrement = () => {
  dispatch(increment());
};

Kab NEW Slice banana hai?
Khud se yeh question pooch:
"Kya yeh ek separate feature hai jiska apna state aur state-changing logic hai?"

NOW WE ARE LEARNING ABOUT TANSTACKQUERY FROM TODAY:
sabse pehle ek Fundamental Confusion Clear krlete hain:
Redux Toolkit                 TanStack Query
─────────────────             ─────────────────
Client State                  Server State

cart                          API data
theme                         users
sidebar                       products
UI preferences                posts
local app state               backend data

ab hum smjhlete hain ke Server State kia hota hai:
Jo data backend/server se aata hai:
React App
   ↓
   API Request
   ↓
Backend / Database
   ↓
   Response
   ↓
React App

Tan Stack Query kia hota hai:
TanStack Query React applications mein server/API data ko fetch, cache, synchronize aur update karne ko easy banata hai.

Normally hum:
useEffect
   ↓
fetch()
   ↓
useState(data)
   ↓
useState(loading)
   ↓
useState(error)
manage karte hain.
TanStack Query mein bohat saari yeh responsibility Query manage karti hai.

Golden Rule:

Redux = App ki state
TanStack Query = Server/API ki state

Step 0:

usko Install krne ke liye hum yeh Use krte hain:
npm install @tanstack/react-query

Phir main.jsx mein:

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
Ye kyun kiya?
QueryClient
     ↓
TanStack Query ka manager
     ↓
queries + cache + server-state management
Aur:
QueryClientProvider
        ↓
React components ko QueryClient available karwata hai
bas Setup Complete.

1. (useQuery):
Ab Asli TanStack Query.
Suppose humne Products API se laane hain.

Normally:
useEffect()
   ↓
fetch()
   ↓
setProducts()

TanStack Query mein:
useQuery()
   ↓
API se data
   ↓
data 

Basic Structure:
const { data, isPending, isError, error } = useQuery({
  queryKey: ["products"],
  queryFn: fetchProducts
});
yahan 2 Cheezen sabse Important hain:
queryKey
queryFn

queryFn:
queryFn ye batata hai ke Data Lana kaisa hai?
Example:
const fetchProducts = async () => {
  const response = await fetch("/api/products");
  return response.json();
};

data => API ka Result => const { data } = useQuery(...)
loading => const { data, isPending } = useQuery(...)
Error => const { isError, error } = useQuery(...)

So useQuery ka basic job:
Server se data READ/FETCH karna + uski state manage karna.

2. (queryKeys):
ab maanlo humare paas:
Products
Users
Posts
TanStack Query ko kaise pata chlega ke konsa Data konsa hai
Query Key ka simple meaning:
"Is query ka unique identity/name kya hai?"

Dynamic query Keys:
Suppose:
/products/10
Aur:
/products/20
To:
["product", 10]
aur:
["product", 20]
different queries hain.

["product", 10]
        ≠
["product", 20]
Why?
Because product 10 aur product 20 ka data different hai.

3. Caching
ye TanStack Query ka bht Important Feature hai:
suppose hum /products first Time Open krta hoon:
Component
   ↓
useQuery
   ↓
API Request
   ↓
Products
   ↓
Cache 💾
Tan Stack Query Data ko Cache krleti hai.
ab agar main same /products
dubara use krta hoon 
to TanStack Query Cache main Already Data Known hoga to wo Agai se Re-Fetch nahi krega.
Simple definition:
Caching = fetched server data ko temporarily store karke rakhna.

4. Refetching
Refetching = API se data ko again fetch karna.

code main kaise use krna hai wo dekht lete hain;
useQuery humen refetch function deta hai:
const { data, refetch } = useQuery({
  queryKey: ["products"],
  queryFn: fetchProducts,
});

<button onClick={refetch}>
  Refresh
</button>

Button Click:
Click Refresh
     ↓
refetch()
     ↓
API request again
     ↓
New data
     ↓
Cache update
     ↓
UI update

React Query khud bhi Refetch krskta hai.
For Example:
User page se bahar gaya
       ↓
Dusri tab/window par gaya
       ↓
Wapas app par aaya
       ↓
React Query → refetch

Simple Definition:
Refetching = Existing query ka data API se dobara fetch karna, taake latest data mil sake.

5. Stale Data 
Suppose API se Data aya Products, TanStack Query ke Perspective se Fresh hota hai lekin kuch Time ke baad Fresh ==> Stale Data.

Stale ka Matlab hai:
Stale ≠ deleted
Stale ≠ useless
Stale ka simple meaning:
"Ye data ab fresh/recent nahi maana ja raha; zarurat par ise refetch kiya ja sakta hai."

Stale Time hum khud decide krskte hain ke kitne Time tak Data Fresh mana jayega.
Like Data agar 5 Mins tak Fresh mana jaaye to uske liye hum aise Code Implement krenge:
useQuery({
  queryKey: ["products"],
  queryFn: fetchProducts,
  staleTime: 300000, 
});
yahan pe hum log Stale Time Define krrhe hain

6. useMutation
ab tak hum Data Read krrhe the lekin agar Data Change krna ho to hum useMutation use krenge.
useQuery
→ Server se data READ

useMutation
→ Server par data CHANGE
useMutation ka just Idea kaafi hai For Now jab hum Proper Database Learn krenge to isko in Detal and in Depth smjhenge.

7. Query Invalidation
Query Invalidation = React Query, ye cached data ab purana ho sakta hai — isko dobara check karna.
Example:
Products cache mein:
10 products
     ↓
User adds a new product
     ↓
Server:
11 products
     ↓
Cache ab purana hai ❌
     ↓
Query Invalidation
     ↓
React Query refetch karega
     ↓
Latest 11 products ✅
Ye kyun chahiye?

Suppose tumhare paas:

useQuery → Products

Aur user:

useMutation → Add Product

Product successfully add ho gaya server par, lekin tumhari Products query ke cache mein abhi old data ho sakta hai.

To hum kehte hain:

"Products query ko invalidate karo"

React Query samajhta hai:

"Okay, ye query fresh nahi hai. Mujhe isko dobara fetch karna chahiye."

One-line definition:
Query Invalidation = kisi cached query ko stale mark karna taake React Query uska fresh data dobara fetch kar sake.

8. Pagination:
Agar Server pe 1000 Products hain, to ek saath 1000 Producte Load krne ke bajaaye:
Page 1 → Products 1–10
Page 2 → Products 11–20
Page 3 → Products 21–30
...
Yani large data ko small pages mein divide karna = Pagination.
React Query mein flow:
User → Page 2 click
          ↓
     page = 2
          ↓
     useQuery
          ↓
   API se page 2
          ↓
   Products 11–20

Usually query key mein page number hota hai:

["products", 1]  → Page 1
["products", 2]  → Page 2
["products", 3]  → Page 3

Iska fayda ye hai ke React Query har page ko separate query/cache entry ki tarah identify kar sakta hai.

9. Infinite Queries:
Pagination main:
Page 1
Page 2
Page 3
User Manually Page Change krta hai.

Inifnite Scrolling main;
Products
Products
Products
↓
Scroll
↓
More Products
↓
Scroll
↓
More Products

is cheez ke liye hum useInfiniteQuery use krenge:
useQuery
   ↓
Normal query
   ↓
Ek page/data set

useInfiniteQuery
   ↓
Multiple pages
   ↓
Load more / infinite scroll

Tan Stack Query main iske liye:
useInfiniteQuery()

iska Basic Flow;
First request
     ↓
Page 1
     ↓
User clicks "Load More"
     ↓
Page 2
     ↓
User clicks again
     ↓
Page 3
     ↓
...

10. Optimistic Updates.
yeh sabse Advance and Important Topic hai in Tan Stack Query:
sabse pehle hum smjhlete hain ke Optimistic Update hota kia hai?
Noramlly:
User clicks ❤️
      ↓
API request
      ↓
Server response
      ↓
UI update ❤️

Optimistic Update main:
User clicks ❤️
      ↓
UI IMMEDIATELY update ❤️
      ↓
API request
      ↓
Success ✅ → keep it
Error ❌ → rollback

Yani hum server ke response ka wait nahi karte, pehle UI ko update kar dete hain because we're optimistic ke request successful hogi. 😄
Real example
Suppose:
Likes: 10
User ❤️ click karta hai.
Normal:
10
 ↓
API
 ↓
11

Optimistic:
10
 ↓
Immediately 11 ❤️
 ↓
API request
 ↓
Success → 11 ✅

Agar API fail:
10
 ↓
11 ❤️  ← temporary
 ↓
API failed ❌
 ↓
10  ← rollback

TanStack Query mein flow:
Usually useMutation ke saath:
useMutation
    ↓
onMutate
    ↓
UI/cache ko immediately update
    ↓
API request
    ↓
Success?
   ↙   ↘
 YES    NO
 ↓       ↓
Keep   Rollback
iska abhi sirf Concept Smjhna Kafi hai lekin jab hum Actual Database and useMutate wager Learn krenge to isko or Detail and Double Down krke smjhenge So Far.

ab hum "React Performance" ka Chapter Start krenge:
isko seekhne ke pehle hum kuch Concepts seekh lete hain:
1. Re-Rendering:
Re-Rendering ka Matlab hai ke Component ka Function dubara Run hona
jaise humare paas ek Count ka Fn hai jismen State hai jaise hi User ne + Button pe Click kia to State Change hogyi or Component Re-Renderi hogya.
Important:
Re-render ≠ poora browser/page reload
Yeh bohot important hai.

2. Reconcillation:
ab React ke paas new JSX agya hai.
React poochta hai ke:
Previous UI or New UI main kia Difference hai.
Previous:
<h1>Hello</h1>
<button>0</button>

New:
<h1>Hello</h1>
<button>1</button>
React dekhenga ke <h1> same hai lekin <button> Change hogya to Browser main sirf Required Changes Apply krega.
is Process ko Broadly Reconcillation kehte hain.

Simple Definition:
Re-render = component dobara calculate hona
Reconciliation = React new result ko previous result se compare karke required UI changes decide karta hai

3. Keys
humne map function main keys dekhi hongi:
products.map(product => (
  <div key={product.id}>
    {product.title}
  </div>
))
key dene ka Purpose sirf Warning hatana nahi hota hai balke
React ko hel milti hai Identify krne main:
Ye item kaun sa hai?
Ye naya hai?
Ye remove hua?
Ye move hua?
Ye same item hai?

keys ki wjh se React Understand krta hai:
A → same
B → removed
C → same
D → new

Golden Rule:
List mein stable unique key use karo.
Usually ==> key={item.id} (Best Approach)

4. State Placement:
ye Perfomace ka bht Important Concept hai:
Suppose:
App
 ├── Navbar
 ├── Search
 ├── ProductList
 └── Footer
agar searchTextState sirf Search Component ko chahye to State ko Unnecessarily App main rkhna zrori nahi 
Bad Approach:
App
 └── searchText state
       ↓
   whole App can re-render

Better:

App
 ├── Navbar
 ├── Search
 │    └── searchText state
 ├── ProductList
 └── Footer

Rule:
State ko jitna Possible hoske utna Neeche rkho - Jahan Actually Required ho!
isko State Placement kehte hain.

ab Actual Optimization Start!
1. React.memo
Suppose:
Parent
 ├── Child A
 └── Child B
Parent Re-Render hua 
ormally React Child A aur Child B ko bhi render process mein la sakta hai.
Agar Child A ka output same hi rehna hai, hum React ko keh sakte hain:
"Agar props same hain toh is component ko unnecessary render mat karna."
That's:
React.memo
Concept:
Parent re-render
       ↓
Child
       ↓
Props same?
   ↙       ↘
 YES       NO
 ↓          ↓
skip       render

But ⚠️,
React.memo har component pe lagana good practice nahi.
Because memoization bhi cost rakhti hai.
Isliye:
Pehle unnecessary render identify karo, phir optimize karo.
Example:
const UserCard = React.memo(function UserCard({ name }) {
  return <h2>{name}</h2>;
});
React.memo = Parent re-render hone par agar child ke props same hain, to child ka unnecessary re-render skip karne ki optimization.

2. useMemo
useMemo kisi expensive calculation ke result ko cache/memoize karta hai, taake har re-render par calculation dobara na karni pade.
ab maanlo component main koi Expensive Calculation ho 
Example Coceptually:
100,000 products
        ↓
filter
        ↓
sort
        ↓
expensive calculation

ab koi Unrelated State Change hui like Count 0 -> 1 hua to Component Re-render hoga 
Normally:
Re-Render → Expensive Calculation Again
useMemo ke saath:
Re-render
   ↓
Kya dependency change hui?
      ↙       ↘
    NO         YES
    ↓           ↓
Cached       Calculation
result       AGAIN

Code se smjhte hain:
const filteredProducts = useMemo(() => {
  return products.filter((product) => product.price > 1000);
}, [products]);
yahan:
useMemo(
  () => calculation,
  [dependencies]
)
iska matlab:
products same hain
      ↓
calculation dobara nahi
      ↓
previous result use karo

lekin:
products change
      ↓
calculation dobara
      ↓
new result cache

useMemo vs React.memo 🔥

Ye bohot important hai:

|                        | `React.memo`                          | `useMemo`                   |
| ---------------------- | ------------------------------------- | --------------------------- |
| Kya memoize karta hai? | Component                             | Calculation ka result       |
| Purpose                | Unnecessary component re-render avoid | Expensive calculation avoid |
| Example                | `UserCard`                            | `filteredProducts`          |
| Works with             | Props                                 | Dependencies                |

⚠️ Important

useMemo ka matlab ye nahi:

"Har calculation ko useMemo mein daal do."

Agar calculation simple hai:

const total = price * quantity;

to useMemo lagane ki zaroorat nahi.

UseMemo mainly tab useful hota hai jab:

calculation genuinely expensive ho
large arrays ko filter/sort/process kar rahe ho
unnecessary repeated calculation performance issue create kar rahi ho

3. useCallback
useCallback ek function ko memoize/cache karta hai, taake parent re-render hone par unnecessary new function create na ho.
pehle Problem smjh lete hain:
Suppose:
Parent
   ↓
handleClick function
   ↓
Child

Parent re-render hua:

Parent re-render
      ↓
handleClick ka NEW function ❗
      ↓
Child ko new function prop mila
      ↓
Child re-render

Even agar function ka actual kaam same hai.

useCallback:
const handleClick = useCallback(() => {
  console.log("Clicked");
}, []);
Parent re-render
      ↓
useCallback
      ↓
Dependencies same?
      ↓
YES
      ↓
Same function reference ✅
agar dependency change ho:
dependency changed
      ↓
New function create

React.memo + useCallback ka Connection:
Ye sabse important part hai.
Suppose:
<Child onClick={handleClick} />
Aur Child:
React.memo(Child)

Ab problem ye hai:
Parent re-render
      ↓
New handleClick function
      ↓
Child receives new prop
      ↓
React.memo says:
"Prop changed!" ❌
      ↓
Child re-render

useCallback:
Parent re-render
      ↓
useCallback
      ↓
Same function reference
      ↓
Child prop same ✅
      ↓
React.memo → skip re-render
🔥 Ye dono aksar saath use kiye jaate hain.

useMemo vs useCallback
Isko bas ye yaad rakho:
useMemo
   ↓
VALUE / RESULT ko memoize

useCallback
   ↓
FUNCTION ko memoize

Easy Example:
Pehle situation

Maan lo Parent ke paas:

const [count, setCount] = useState(0);
const [name, setName] = useState("Usman");

Aur hum Child ko ek function bhej rahe hain:

<Child onClick={handleClick} />

Ab function:

const handleClick = useCallback(() => {
  console.log(name);
}, [name]);
Ab [name] ka matlab kya hai?

Ye React ko keh raha hai:

"Jab tak name change nahi hota, isi function ko reuse karna."

Case 1 — count change hua

Starting:

name = "Usman"
count = 0

handleClick bana:

Function A
   ↓
console.log("Usman")

Ab:

count: 0 → 1

Parent re-render.

React dekhta hai:

name change hua?
     ↓
    NO ❌

To useCallback:

Function A
   ↓
same function reference ✅

Child ko same function milti hai.

Agar Child React.memo hai:

Props same
   ↓
Child re-render skip ✅
Case 2 — name change hua

Ab:

name: "Usman" → "Ali"

Parent re-render.

React dekhta hai:

[name]
   ↓
name change hua?
   ↓
YES ✅

To React new function create karega:

Old:
Function A → console.log("Usman")

New:
Function B → console.log("Ali")

Ab Child ko new function reference mili:

Child receives Function B
        ↓
Prop changed
        ↓
React.memo can't skip
        ↓
Child re-render 🔄
🔥 Ye dependency ka actual funda hai
const handleClick = useCallback(() => {
  console.log(name);
}, [name]);

Think like this:

                 name
                  ↓
           Dependency array
                  ↓
        ┌─────────┴─────────┐
        ↓                   ↓
 name same              name changed
        ↓                   ↓
same function          new function
        ↓                   ↓
Child can skip        Child may re-render
Ek aur SUPER simple analogy 🧠

useCallback ko bolo:

"Meri function ko sambhal ke rakhna."

Dependency array bolo:

"Lekin agar ye cheez change ho, to purani function hata kar new function bana dena."

So:

useCallback(function, [name])
                         ↑
                  "name change ho
                   to function update"

4. Lazy Loading
Suppose humari Application bht Large hai or us main Mutliple Pages hain like:
Home
Dashboard
Admin
Settings
Profile
Charts
Editor
...
user ne sirf Home Open kia.
Kya har cheez ka JavaScript immediately load karna zaroori hai?
Not necessarily.

Lazy loading ka idea:
Jo cheez abhi required nahi, usko baad mein load karo.

5. React.lazy
React main Lazy Loading ke liye use krte hain.
React.lazy() ==> Use hota hai.
Example:
const Dashboard = React.lazy(() => import("./Dashboard"));
Dashboard component ko abhi load mat karo; jab required ho tab import karo.
isko abhi hum ek dam Working Example se smjhte hain:
I. Folder Structure
src/
│
├── App.jsx
└── Dashboard.jsx

II.Dashboard.jsx
Ye hamara normal component hai:
function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>Welcome to your dashboard!</p>
    </div>
  );
}

export default Dashboard;
Abhi tak kuch special nahi hai.

III. Ab App.jsx
Yahan magic hoga:
import { lazy, Suspense, useState } from "react";
const Dashboard = lazy(() => import("./Dashboard"));
function App() {
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div>
      <h1>My App</h1>

      <button onClick={() => setShowDashboard(true)}>
        Open Dashboard
      </button>

      {showDashboard && (
        <Suspense fallback={<h2>Dashboard Loading...</h2>}>
          <Dashboard />
        </Suspense>
      )}
    </div>
  );
}
export default App;

Ab line-by-line samjho. 👇

Sabse important line
const Dashboard = lazy(() => import("./Dashboard"));
Iska matlab:
Dashboard ko abhi immediately load mat karo. Jab Dashboard actually render hone ki zaroorat aaye, tab ./Dashboard ko load karna.
Ye:
import("./Dashboard")
dynamic import hai.

Initially kya hoga?
Jab app start hogi:
App start
   ↓
My App
   ↓
Open Dashboard button
Dashboard abhi screen par nahi hai.
Because:
showDashboard = false
Ye condition:
{showDashboard && (
   ...
)}
false hai.
So:
Dashboard ❌

Ab button click karo
User:
[ Open Dashboard ]
       ↓
      CLICK
Ye chalega:
setShowDashboard(true);
Ab:
showDashboard
false → true
React re-render karega.
Ab condition:
{showDashboard && ...}
true ho gayi.
React ko ab:
<Dashboard />
chahiye.

Ab lazy() ka actual kaam start 🔥
React dekhta hai:
const Dashboard = lazy(() => import("./Dashboard"));
Aur bolta hai:
"Oh! Dashboard ab chahiye. Iska code load karo."
Then:
import("./Dashboard")
       ↓
Dashboard.jsx download/load
       ↓
Dashboard component ready
       ↓
Render

Suspense kya kar raha hai?
Dashboard load hone mein thoda time lag sakta hai.
Isliye humne:
<Suspense fallback={<h2>Dashboard Loading...</h2>}>
likha.
fallback ka matlab:
"Jab Dashboard ready nahi hai, ye dikhao."
So temporarily:
Dashboard Loading...
Aur jab Dashboard load ho gaya
Dashboard Loading...
       ↓
Dashboard
Welcome to your dashboard!

Ek choti si baat jo confuse karti hai

Ye:

const Dashboard = lazy(() => import("./Dashboard"));

Dashboard ko render nahi kar raha.

Ye sirf React ko bata raha hai:

"Dashboard ek lazy component hai; jab iska render required hoga, tab iska module load karna."

Actual rendering:

<Dashboard />

se hoti hai.

6. Suspense
ab Problem:
Dashbaord Code Load horha hai...
tab tak UI main kia dekhenge?
Suspense:
<Suspense fallback={<p>Loading...</p>}>
  <Dashboard />
</Suspense>

Mental Model:
Need Dashboard
      ↓
Code loading...
      ↓
Suspense
      ↓
"Loading..."
      ↓
Code loaded
      ↓
Dashboard

7. Code Splitting:
Code Splitting = apni app ke JavaScript code ko multiple smaller chunks mein divide karna, instead of ek huge bundle banane ke.

Imagine humari App main:
Home
Products
Dashboard
Admin
Profile

to humen isko ek File main Wrap krne ke bajaaye usko chunks main Divide krke rkhna chahye.
Real World Example:
🔥 Lazy Loading aur Code Splitting ka connection

Ye sabse important part hai.

Code Splitting:

Code ko pieces/chunks mein divide karna.

Lazy Loading:

Un chunks ko zaroorat ke waqt load karna.

So:

Code Splitting
      ↓
Code ko chunks mein divide
      ↓
Lazy Loading
      ↓
Required chunk ko later load
Tumhare previous example se samjho

Humne likha tha:

const Dashboard = lazy(() => import("./Dashboard"));

Yahan:

import("./Dashboard")

bundler ko signal deta hai ke Dashboard ko separate chunk mein split kiya ja sakta hai.

Then:

Main App
   │
   ├── Dashboard chunk
   ├── Admin chunk
   └── Profile chunk

User Dashboard open karta hai:

User opens Dashboard
        ↓
Dashboard chunk load
        ↓
Dashboard render


AB POORA CHAPTER EK MAP MAIN:
                    PERFORMANCE
                         │
        ┌────────────────┴────────────────┐
        │                                 │
   WHY RE-RENDER?                    LARGE BUNDLE?
        │                                 │
        ↓                                 ↓
   Re-rendering                      Lazy Loading
        │                                 │
        ↓                                 ├── React.lazy
   Reconciliation                        │
        │                                 └── Suspense
        ↓
      Keys
        │
        ↓
  State Placement
        │
        ↓
   React.memo
        │
        ├──────────────┐
        ↓              ↓
    useMemo       useCallback

⚠️ Sabse important lesson

Bro performance optimization ka matlab yeh nahi:

Har component → React.memo ❌
Har value → useMemo ❌
Har function → useCallback ❌

Instead:

App slow?
   ↓
Find the reason
   ↓
Unnecessary re-render?
   ↓
Understand why
   ↓
Choose appropriate optimization
Tumhare Level 9 ka actual goal:

Optimization yaad karna nahi — React ke render behavior ko samajhna.