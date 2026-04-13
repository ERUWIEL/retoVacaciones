// @author erwbyel

/** funcion para agrupar las actividades por categoría y acumular cantidades
 * @param {Array} activities
 * @returns {Object}
 */
function organizeActivities(activities) {
  const result = {};

  for (const activity of activities) {
    const name = activity.name;
    const quantity = activity.quantity;
    const category = activity.category;

    if (result[category] === undefined) {
      result[category] = {};
    }

    if (result[category][name] === undefined) {
      result[category][name] = quantity;
    } else {
      result[category][name] = result[category][name] + quantity;
    }
  }

  return result;
}


// Demostracion
const activities = [
  { name: 'Pesca', quantity: 5, category: 'Acuaticas' },
  { name: 'Banana', quantity: 3, category: 'Acuaticas' },
  { name: 'Pulmonia', quantity: 2, category: 'Terrestre' },
  { name: 'Banana', quantity: 2, category: 'Acuaticas' },
  { name: 'Razer', quantity: 4, category: 'Todoterreno' }
];
console.log('corriendo demostracion...');
console.log(organizeActivities(activities));
// Fin Demostracion