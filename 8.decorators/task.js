//Задача № 1
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper(...args) {
        const hash = md5(args.join(",")); // получаем правильный хеш c помощью функции md5
        let objectInCache = cache.find((item) => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
        if (objectInCache) { // если элемент найден
            console.log("Из кеша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кеша: " + objectInCache.value;
        }

        let result = func(...args); // в кеше результата нет — придётся считать
        cache.push({ hash: hash, value: result }); // добавляем элемент с правильной структурой
        if (cache.length > 5) {
            cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый) 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}

//Задача № 2
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    let count = 0;
    let allCount = 0;

    function wrapper(...args) {
        clearTimeout(timeoutId);

        const fastStart = !timeoutId;

        timeoutId = setTimeout(() => {
            timeoutId = null;
            if (!fastStart) {
                func(...args);
            }
        }, delay);

        if (fastStart) {
            count++;
            func(...args);
        }

        allCount++;
    }

    Object.defineProperty(wrapper, 'count', {
        get() {
            return count;
        }
    });

    Object.defineProperty(wrapper, 'allCount', {
        get() {
            return allCount;
        }
    });

    return wrapper;
}