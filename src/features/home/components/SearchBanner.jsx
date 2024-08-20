import { useState } from "react";
import banner from "./assets/CoupeBgImage.svg";
import "./SearchBanner.css";

export const SearchBanner = () => {
  console.log("Search Banner Reched");
  // State for Each Select
  const [lookingFor, setLookingFor] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [education, setEducation] = useState("");
  const [profession, setProfession] = useState("");

  // Handle Input Changes
  const handleLookingForChange = (e) => {
    setLookingFor(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleEducationChange = (e) => {
    setEducation(e.target.value);
  };

  const handleProfessionChange = (e) => {
    setProfession(e.target.value);
  };

  // Submit Function
  const handleSubmit = (e) => {
    e.preventDefault();

    // Gather all selected values
    const selectedValues = {
      lookingFor,
      age,
      location,
      education,
      profession,
    };

    console.log("Selected Values:", selectedValues);

    // API call or other actions
  };

  return (
    <section className="w-full h-full relative">
      <img
        src={banner}
        className="object-cover w-full h-full md:h-auto"
        alt="banner"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center px-4 md:px-6 lg:px-10">
        <h1
          className="text-4xl font-extrabold text-white mb-4 md:text-5xl lg:text-6xl"
          style={{ fontFamily: "Merriweather", fontWeight: "300px" }}
        >
          Find the perfect connection for you
        </h1>
        <p
          className="text-lg font-normal text-white mb-6 md:text-xl lg:text-2xl"
          style={{ fontFamily: "Merriweather" }}
        >
          Add your partner preferences
        </p>

        <div className="bg-white bg-opacity-60 rounded-lg p-4 md:p-6 lg:p-8 mx-4 md:mx-6 lg:mx-8">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 md:flex-row md:flex-wrap md:gap-6 lg:gap-8"
          >
            <select
              id="looking-for"
              value={lookingFor}
              onChange={handleLookingForChange}
              className="block w-full md:w-auto p-3 text-lg text-black border rounded-lg"
              aria-label="Looking For"
              required
            >
              <option value="">Looking for</option>
              <option value="women">Women</option>
              <option value="men">Men</option>
              <option value="others">Others</option>
            </select>

            <select
              id="age"
              value={age}
              onChange={handleAgeChange}
              className="block w-full md:w-auto p-3 text-lg text-black border rounded-lg"
              aria-label="Age"
              required
            >
              <option value="">Age</option>
              <option value="18">18</option>
              <option value="19">19</option>
              <option value="20">20</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
              <option value="26">26</option>
              <option value="27">27</option>
              <option value="28">28</option>
              <option value="29">29</option>
              <option value="30">30</option>
              <option value="31">31</option>
              <option value="32">32</option>
              <option value="33">33</option>
              <option value="34">34</option>
              <option value="35">35</option>
              <option value="36">36</option>
              <option value="37">37</option>
              <option value="38">38</option>
              <option value="39">39</option>
              <option value="41">40</option>
              <option value="41">41</option>
              <option value="42">42</option>
              <option value="43">43</option>
              <option value="44">44</option>
              <option value="45">45</option>
              <option value="46">46</option>
              <option value="47">47</option>
              <option value="48">48</option>
              <option value="49">49</option>
              <option value="50">50</option>
              <option value="50">50+</option>
            </select>

            <select
              id="location"
              value={location}
              onChange={handleLocationChange}
              className="block w-full md:w-auto p-3 text-lg text-black border rounded-lg"
              aria-label="Location"
              required
            >
              <option value="">Location</option>
              <option value="ny">New York</option>
              <option value="sf">San Francisco</option>
              <option value="la">Los Angeles</option>
            </select>

            <select
              id="education"
              value={education}
              onChange={handleEducationChange}
              className="block w-full md:w-auto p-3 text-lg text-black border rounded-lg"
              aria-label="Education"
              required
            >
              <option value="">Education</option>
              <option value="high-school">High School</option>
              <option value="bachelor">Bachelos</option>
              <option value="master">Masters</option>
            </select>

            <select
              id="profession"
              value={profession}
              onChange={handleProfessionChange}
              className="block w-full md:w-auto p-3 text-lg text-black border rounded-lg"
              aria-label="Profession"
              required
            >
              <option value="">Profession</option>
              <option value="accountant">Accountant</option>
              <option value="financial_analyst">Financial Analyst</option>
              <option value="financial_advisor">Financial Advisor</option>
              <option value="marketing_professional">
                Marketing Professional
              </option>
              <option value="hr_specialist">Human Resources Specialist</option>
              <option value="entrepreneur">Entrepreneur</option>
              <option value="business_owner">Business Owner</option>
              <option value="athlete">Athlete</option>
              <option value="coach">Coach</option>
              <option value="trainer">Trainer</option>
              <option value="fitness_instructor">Fitness Instructor</option>
              <option value="military_personnel">Military Personnel</option>
              <option value="police_officer">Police Officer</option>
              <option value="private_security">
                Private Security Personnel
              </option>
              <option value="farmer">Farmer</option>
              <option value="agricultural_worker">Agricultural Worker</option>
              <option value="forester">Forester</option>
              <option value="wildlife_conservationist">
                Wildlife Conservationist
              </option>
              <option value="pilot">Pilot</option>
              <option value="air_traffic_controller">
                Air Traffic Controller
              </option>
              <option value="truck_driver">Truck Driver</option>
              <option value="marine_engineer">Marine Engineer</option>
              <option value="deck_officer">Deck Officer</option>
              <option value="hospitality_professional">
                Hospitality Professional
              </option>
              <option value="retail_worker">Retail Worker</option>
              <option value="customer_service_representative">
                Customer Service Representative
              </option>
              <option value="electrician">Electrician</option>
              <option value="plumber">Plumber</option>
              <option value="carpenter">Carpenter</option>
              <option value="mason">Mason</option>
              <option value="construction_worker">Construction Worker</option>
              <option value="artist">Artist</option>
              <option value="musician">Musician</option>
              <option value="composer">Composer</option>
              <option value="actor">Actor</option>
              <option value="performer">Performer</option>
              <option value="writer">Writer</option>
              <option value="author">Author</option>
              <option value="film_production">Film Production Crew</option>
              <option value="television_production">
                Television Production Crew
              </option>
              <option value="researcher">Researcher</option>
              <option value="biologist">Biologist</option>
              <option value="chemist">Chemist</option>
              <option value="laboratory_technician">
                Laboratory Technician
              </option>
              <option value="environmental_scientist">
                Environmental Scientist
              </option>
              <option value="lawyer">Lawyer</option>
              <option value="attorney">Attorney</option>
              <option value="judge">Judge</option>
              <option value="paralegal">Paralegal</option>
              <option value="legal_secretary">Legal Secretary</option>
              <option value="teacher">Teacher</option>
              <option value="educational_administrator">
                Educational Administrator
              </option>
              <option value="librarian">Librarian</option>
              <option value="software_engineer">Software Engineer</option>
              <option value="hardware_engineer">Hardware Engineer</option>
              <option value="it_professional">IT Professional</option>
              <option value="data_scientist">Data Scientist</option>
              <option value="data_analyst">Data Analyst</option>
              <option value="web_developer">Web Developer</option>
              <option value="web_designer">Web Designer</option>
            </select>

            <button
              type="submit"
              className="w-full md:w-auto bg-pink-800 text-white px-4 py-2 rounded-lg hover:bg-pink-900 "
            >
              Find
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
