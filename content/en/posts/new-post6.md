---
title: "New Post6"
date: 2025-03-16T13:09:23+01:00
draft: false
type: posts
---
Maecenas rutrum, eros quis suscipit malesuada, tortor est lacinia dolor, ac lobortis purus nibh ut est. Sed ultrices, mi vel rutrum dapibus, orci tellus vestibulum dolor, non iaculis nunc nisi id nunc. Donec in efficitur lorem. Suspendisse eros diam, tempus id lacinia at, rhoncus sit amet tortor. Phasellus in erat at massa hendrerit viverra. Curabitur gravida purus et est venenatis volutpat. Fusce ultricies metus sed lacinia aliquet. Nam ut euismod ligula, luctus porta sapien. Aenean in metus sed dolor mollis iaculis vitae nec mi. Vestibulum ultrices consequat vulputate. Ut at felis lorem.

```cpp
int main()
{
    std::ifstream f("day1.txt");

    int topElf = 0;
    int topElfNum = 0;
    int curElf = 0;
    int elfNum = 1;

    for (std::string line; getline(f, line);)
    {
        if (line.length() == 0)
        {
            std::cout << elfNum << " : " << curElf << "\n";
            if (curElf > topElf)
            {
                topElfNum = elfNum;
                topElf = curElf;
            }
            curElf = 0;
            elfNum++;
        }
        else
        {
            curElf += std::atoi(line.c_str());
        }
    }

    std::cout << topElfNum << " : " << topElf << "\n";

    return EXIT_SUCCESS;
}
```

Код на PHP

```php
function getMaxSum($arr) {
    rsort($arr);
    $maxSum = $arr[0];
    for ($i = 1; $i < count($arr); $i++) {
        $newSum = $maxSum + $arr[$i];
        if ($newSum <= $maxSum) {
            return $maxSum;
        }
        $maxSum = $newSum;
    }
    return $maxSum;
}

function getMaxContiguous($arr) {
    $prev_max = max($arr);
    $curr_max = 0;
    $start = 0;
    $end = 0;
    $s = 0;

    for ($i = 0; $i < count($arr); $i++)
    {
        $curr_max += $arr[$i];
        if ($prev_max < $curr_max) {
            $prev_max = $curr_max;
            $start = $s;
            $end = $i;
        }
        if ($curr_max < 0) {
            $curr_max = 0;
            $s = $i + 1;
        }
    }
    //echo $prev_max, ' start: ', $start, ' to: ', $end, PHP_EOL;
    return $prev_max;
} 
```

Docker Compose
```yaml
version: "3.8"

services:
  mysql:
    image: mysql:latest
    environment:
      MYSQL_ROOT_PASSWORD: rootpassword
      MYSQL_DATABASE: mydatabase
      MYSQL_USER: user
      MYSQL_PASSWORD: password
    ports:
      - "3306:3306"
    volumes:
      - mysql_data:/var/lib/mysql

  postgres:
    image: postgres:latest
    environment:
      POSTGRES_DB: mydatabase
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data

  mongodb:
    image: mongo:latest
    environment:
      MONGO_INITDB_ROOT_USERNAME: root
      MONGO_INITDB_ROOT_PASSWORD: rootpassword
    ports:
      - "27017:27017"
    volumes:
      - mongo_data:/data/db

volumes:
  mysql_data:
  postgres_data:
  mongo_data:

```

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse condimentum elementum porta. Integer mattis feugiat diam, non convallis lacus congue cursus. Duis et `echo $qwerty;` viverra risus, vitae sollicitudin sapien. Donec maximus dolor nec nisl pretium dignissim. Donec mattis urna quis felis fermentum, ac faucibus orci ultricies. Nulla iaculis enim tellus, a pretium purus vehicula commodo. Vestibulum id est vitae elit sollicitudin iaculis. Aenean in nibh risus. Nunc tincidunt molestie eros ut ullamcorper. Donec eu imperdiet lacus, in scelerisque nisi. Maecenas sit amet dignissim ipsum. Mauris tristique neque in blandit dapibus. Suspendisse eget velit aliquam, tincidunt ligula non, imperdiet mauris. Integer ipsum massa, vulputate varius leo volutpat, iaculis facilisis libero. Duis ut mi quis arcu imperdiet venenatis. Ut efficitur ligula id aliquam suscipit.