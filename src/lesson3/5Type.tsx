const Peoples = [
    {
        name: "tim",
        age: 20,
    },
    {
        name: "alex",
        age: 22
    }
];
//error,localCompare
//const sortedPeoples = Peoples.sort((a, b) => a.name.localCompare(b.name));
const sortedPeoples = Peoples.sort((a, b) => a.name.localeCompare(b.name));
export default sortedPeoples;