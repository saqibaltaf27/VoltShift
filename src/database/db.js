import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase({
    name: 'voltshift.db',
    location: 'default'
},
() => console.log("DB OPEN"),
e => console.log(e)
);

export const initDB = () => {
    db.transaction(tx => {
        tx.executeSql(`
            Create Table If Not Exists components(
            id Integer Primary Key AutoIncrement,
            name Text,
            minResistance REAL,
            maxResistance REAL);`);

        tx.executeSql(`
            Create Table If Not Exists sessions(
            id Integer Primary Key AutoIncrement,
            vin Text,
            date Text);`);
    });
};

export default db;
