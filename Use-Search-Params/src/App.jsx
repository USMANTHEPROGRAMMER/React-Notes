import { useSearchParams } from "react-router-dom";

function App() {

  // ============================================================
  // 1. useSearchParams()
  // ============================================================
  //
  // useSearchParams() humein URL ke query parameters
  // ko READ aur UPDATE karne ki facility deta hai.
  //
  // Ye bilkul useState jaisa lagta hai:
  //
  // const [state, setState] = useState(...)
  //
  // Waise hi:
  //
  // const [searchParams, setSearchParams] = useSearchParams()
  //
  // searchParams     => URL se data READ karne ke liye
  // setSearchParams  => URL mein data CHANGE karne ke liye
  //
  // ============================================================

  const [searchParams, setSearchParams] = useSearchParams();


  // ============================================================
  // 2. URL se values READ karna
  // ============================================================
  //
  // Suppose URL hai:
  //
  // ?search=iphone&category=electronics&sort=low
  //
  // Hum:
  //
  // searchParams.get("search")
  //
  // se "iphone" nikal sakte hain.
  //
  // ============================================================

  const search = searchParams.get("search") || "";

  const category = searchParams.get("category") || "all";

  const sort = searchParams.get("sort") || "default";


  // ============================================================
  // 3. Search Change Function
  // ============================================================
  //
  // Jab user search input mein kuch type karega,
  // hum URL ko update karenge.
  //
  // ============================================================

  function handleSearch(event) {

    // User ne input mein kya likha?
    const value = event.target.value;


    // Existing search parameters ki COPY bana rahe hain.
    //
    // Ye important hai kyun ke hum sirf "search" ko change
    // karna chahte hain.
    //
    // Baaki parameters:
    //
    // category
    // sort
    //
    // ko preserve karna hai.

    const newParams = new URLSearchParams(searchParams);


    // Agar input empty nahi hai
    if (value) {

      // URL mein:
      //
      // search=iphone
      //
      newParams.set("search", value);

    } else {

      // Agar input empty ho gaya,
      // to search parameter remove kar do.

      newParams.delete("search");
    }


    // Ab URL update hoga.
    setSearchParams(newParams);
  }


  // ============================================================
  // 4. Category Change
  // ============================================================

  function handleCategory(event) {

    const value = event.target.value;

    const newParams = new URLSearchParams(searchParams);


    if (value === "all") {

      // Agar "all" select hua to category ki zaroorat nahi.

      newParams.delete("category");

    } else {

      // Example:
      //
      // category=electronics

      newParams.set("category", value);
    }


    // URL update
    setSearchParams(newParams);
  }


  // ============================================================
  // 5. Sort Change
  // ============================================================

  function handleSort(event) {

    const value = event.target.value;

    const newParams = new URLSearchParams(searchParams);


    if (value === "default") {

      // Default sort hai to URL mein
      // sort parameter rakhne ki zaroorat nahi.

      newParams.delete("sort");

    } else {

      // Example:
      //
      // sort=low

      newParams.set("sort", value);
    }


    // URL update
    setSearchParams(newParams);
  }


  // ============================================================
  // 6. Clear All Filters
  // ============================================================

  function clearFilters() {

    // Empty URLSearchParams object
    //
    // Iska matlab:
    //
    // ?search=...
    // ?category=...
    // ?sort=...
    //
    // sab remove.

    setSearchParams({});
  }


  // ============================================================
  // 7. UI
  // ============================================================

  return (

    <div style={{
      padding: "40px",
      fontFamily: "Arial"
    }}>

      <h1>Product Filter App</h1>


      {/* =====================================================
          SEARCH INPUT
          ===================================================== */}

      <div style={{ marginBottom: "20px" }}>

        <label>
          Search:
        </label>

        <br />

        <input
          type="text"

          // URL se current search value aa rahi hai
          value={search}

          // User type karega to URL update hoga
          onChange={handleSearch}

          placeholder="Search products..."
        />

      </div>


      {/* =====================================================
          CATEGORY
          ===================================================== */}

      <div style={{ marginBottom: "20px" }}>

        <label>
          Category:
        </label>

        <br />

        <select
          value={category}
          onChange={handleCategory}
        >

          <option value="all">
            All
          </option>

          <option value="electronics">
            Electronics
          </option>

          <option value="shoes">
            Shoes
          </option>

          <option value="clothes">
            Clothes
          </option>

        </select>

      </div>


      {/* =====================================================
          SORT
          ===================================================== */}

      <div style={{ marginBottom: "20px" }}>

        <label>
          Sort:
        </label>

        <br />

        <select
          value={sort}
          onChange={handleSort}
        >

          <option value="default">
            Default
          </option>

          <option value="low">
            Price: Low to High
          </option>

          <option value="high">
            Price: High to Low
          </option>

        </select>

      </div>


      {/* =====================================================
          CURRENT URL DATA
          ===================================================== */}

      <div>

        <h2>
          Current Search Parameters
        </h2>


        <p>
          Search: {search || "Nothing"}
        </p>


        <p>
          Category: {category}
        </p>


        <p>
          Sort: {sort}
        </p>

      </div>


      {/* =====================================================
          CLEAR BUTTON
          ===================================================== */}

      <button onClick={clearFilters}>
        Clear Filters
      </button>


      {/* =====================================================
          DEBUGGING
          ===================================================== */}

      <div style={{
        marginTop: "30px",
        padding: "20px",
        background: "#eee"
      }}>

        <h3>
          Check Your URL 👀
        </h3>

        <p>
          Ab browser ke URL mein dekho.
        </p>

        <p>
          Example:
        </p>

        <code>
          ?search=iphone&category=electronics&sort=low
        </code>

      </div>

    </div>
  );
}

export default App;