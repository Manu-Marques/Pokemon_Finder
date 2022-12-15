import evoli from "../../../src/assets/evoli.jpg";


export default function detailsCard() {
    return (
<div className="pt-4 flex flex-col items-center justify-center w-full h-full">
<img class="pb-2 md:max-w-lg h-auto rounded-lg" src={evoli}alt="image description"/>
<table class="h-96 w-80 sm:w-96  border-separate border border-slate-500 ...">
  <thead>
  </thead>
  <tbody>
    <tr>
      <td class="dark:bg-gray-900 text-center border border-slate-700 ...">Nom</td>
      <td class="text-center border border-slate-700 ...">Evoli</td>
    </tr>
    <tr>
      <td class="text-center border border-slate-700 ...">Ohio</td>
      <td class="text-center border border-slate-700 ...">Columbus</td>
    </tr>
    <tr>
      <td class="text-center border border-slate-700 ...">Michigan</td>
      <td class="text-center border border-slate-700 ...">Detroit</td>
    </tr>
  </tbody>
</table>
</div>
            )
        }
    