import pikachu from "../../../src/assets/pikachu.jpeg";
import evoli from "../../../src/assets/evoli.jpg";
import dracaufeu from "../../../src/assets/dracaufeu.png";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Slide } from "react-slideshow-image";
import 'react-slideshow-image/dist/styles.css'


export default function Home() {

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        indicators: true,
        arrows: true,
    };

    return (
            <Slide {...properties}>
        <div className="pt-4 dark:bg-grey-50 h-space text-center text-4xl font-bold ">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 inline-block align-middle">
        {/* start 1 card */}
    <div class="p-5">
        <img class="rounded-t-lg" src={evoli} alt="" />
            <h5 class="mb-2 font-normal font-bold tracking-tight text-gray-900 underline dark:text-white">Pikachu</h5>
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
        <Link to="/details-card" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Plus de détails
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </Link>
    </div>
    {/* end 1 card */}
    </div>
        </div>
        <div className="pt-4 dark:bg-grey-50  h-space text-center text-4xl font-bold">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 inline-block align-middle">
        {/* start 2 card */}
    <div class="p-5">
        <img class="rounded-t-lg" src={pikachu} alt="" />
            <h5 class="mb-2 font-normal font-bold tracking-tight text-gray-900 underline dark:text-white">Pikachu</h5>
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
        <a href="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
    {/* end 2 card */}
    </div>
        </div>
        <div className="pt-4 dark:bg-grey-50 h-space text-center text-4xl font-bold">
            <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 inline-block align-middle">
        {/* start 3 card */}
    <div class="p-5">
        <img class="rounded-t-lg" src={dracaufeu} alt="" />
            <h5 class="mb-2 font-normal font-bold tracking-tight text-gray-900 underline dark:text-white">Pikachu</h5>
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
        <a href="" class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg aria-hidden="true" class="w-4 h-4 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
        </a>
    </div>
    {/* end 3 card */}
    </div>
        </div>

        </Slide>

    );
    }