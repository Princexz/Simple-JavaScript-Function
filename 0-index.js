// `a` is a sparse array
const a = [];
a[0] = "a";
a[10] = "b";
a[10000] = "c";
for (const name in a) {
    if (Object.hasOwn(a, name) &&       // These checks are
        /^0$|^[1-9]\d*$/.test(name) &&  // explained
        name <= 4294967294              // below
       ) {
        const element = a[name];
        console.log(a[name]);
    }
}
