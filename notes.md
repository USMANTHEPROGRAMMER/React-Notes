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