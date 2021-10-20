import * as R from 'ramda';

console.log("Arithmetic");
// (a * b + 1)^2
{
    const square = x => R.multiply(x, x);
    const op = R.pipe(
        R.multiply,
        R.inc,
        square
    );
    
    const a = 3;
    const b = 4;
    const res = op(3, 4);
    console.log(res)
}

console.log("conditionals");
// 
{
    const OUR_COUNTRY = "FI";

    const wasBornInCountry = person => R.equals(person.birthCountry, OUR_COUNTRY);
    const wasNaturalized = person => Boolean(person.naturalizationDate)
    const isOver18 = person => R.gte(person.age, 18);
    const isCitizen = R.either(wasBornInCountry, wasNaturalized)
    const isEligibleToVote = R.both(isOver18, isCitizen)

    const notCountry = {
        birthCountry: "EN",
        age: 19
    };
    notCountry.isEliq = isEligibleToVote(notCountry);

    const young = {
        birthCountry: "FI",
        age: 15
    };
    young.isEliq = isEligibleToVote(young);
    const ok = {
        birthCountry: "FI",
        age: 20
    };
    ok.isEliq = isEligibleToVote(ok);
    console.table([ notCountry, young, ok ])
}

console.log("logic");
{
    // const width = settings.lineWidth || 80;
    console.log(R.defaultTo(80, 100));
    console.log(R.defaultTo(80, undefined));
}

console.log("conditionals");
{
    const forever21 = age => age >= 21 ? 21 : age + 1;

    const f21 = age => R.ifElse(R.gte(21), () => 21, inc)(age);

    

    
}