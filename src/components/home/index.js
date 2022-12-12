import pikachu from "../../../src/assets/pikachu.jpeg";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <div className="dark:bg-green-900 h-fit text-center text-4xl font-bold ">
         {/* start search */}
        <form>   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Recherche</label>
    <div class="relative">
        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        </div>
        <input type="search" id="default-search" class=" w-full p-4 pl-10 text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-50 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Pikachu, Pokemon version Platine ..." required/>
        <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Recherche</button>
    </div>
</form>
        {/* end search */}
        {/* start card */}
<div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 inline-block align-middle">
        <img class="rounded-t-lg" src={pikachu} alt="" />
    <div class="p-5">
        <a href="#">
            <h5 class="mb-2 font-normal font-bold tracking-tight text-gray-900 underline dark:text-white">Pikachu</h5>
        </a>
        <ul class="space-y-1 text-xs list-none list-inside text-gray-500 dark:text-gray-400">
    <li>
    <span class="text-base font-bold text-red-700">Color</span> : Jaune
    </li>
    <li>
    <span class="text-base font-bold text-red-700">Type</span> : Electrique
    </li>
    <li>
    <span class="text-base font-bold text-red-700">Attaque</span> : Lightning-rod
    </li>
</ul>
        <Link to ="/details-card" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
</div>
        {/* end card */}
        </div>
        
    );
    }