

abstract class TripPackage {
    abstract createPackage(type: string): void;
}


class TripPackageFactory extends TripPackage {
    
    createPackage(type: string) {
        let ins = null;
        if (type === 's') {
            ins = new StandardPackageFactory();
        } else {
            ins = new PremimumPackageFactory();
        }
        ins.getPackages();
    }
}



class StandardPackageFactory {


}

class PremimumPackageFactory {


}

interface IRooms {
    rooms(): void; 
}

class PremimumRoom implements IRooms {

    /**
     * rooms
     */
    public rooms() {
        console.log("Premimum rooms with sea view and king size bed.");
    }

}

interface IMeals {
    meal(): void; 
}

class PremimumMeal implements IMeals {

    public meal() {
        console.log("Premimum meal.");
    }

}


class StandardRoom implements IRooms{

    public rooms() {
        console.log("Premimum rooms with sea view and king size bed.");
    }

}

class StandardMeal implements IMeals {

    public meal() {
        console.log("Premimum meal.");
    }

}
