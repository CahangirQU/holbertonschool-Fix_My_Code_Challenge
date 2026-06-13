#!/usr/bin/env node
// Bu skript daxil edilən ölçüdə # işarələrindən ibarət kvadrat çap edir

if (process.argv.length <= 2) {
    process.stderr.write("Missing argument\n");
    process.exit(1);
}

// Arqumenti mütləq tam ədədə (integer) çeviririk
const size = parseInt(process.argv[2], 10);

if (isNaN(size) || size <= 0) {
    process.stderr.write("Invalid size\n");
    process.exit(1);
}

// Kvadratı çap edən dövr
for (let i = 0; i < size; i++) {
    let row = "";
    for (let j = 0; j < size; j++) {
        row += "#";
    }
    console.log(row); // Hər sətir bitəndə avtomatik yeni sətirə keçir
}
