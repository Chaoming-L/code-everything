class RaceConditionGuard {
    private lastPromise: PromiseLike<unknown> | null = null;

    getGuardedPromise<T>(promise: PromiseLike<T>) {
        this.lastPromise = promise;
        return this.lastPromise.then(this.preventRaceCondition()) as Promise<T>;
    }

    preventRaceCondition() {
        const currentPromise = this.lastPromise;
        return (response: unknown) => {
            if (this.lastPromise !== currentPromise) {
                return new Promise(() => null);
            }
            return response;
        };
    }

    cancel = () => {
        this.lastPromise = null;
    };
}

const guard = new RaceConditionGuard();

const promise1 = async () => {
    return 1;
};

const promise2 = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(2);
        }, 1000);
    });
};

const go = async () => {
    guard.getGuardedPromise(promise1()).then(console.log);
    guard.getGuardedPromise(promise2()).then(console.log);
};

go();
