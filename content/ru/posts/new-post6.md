---
title: "New Post6"
date: 2025-03-16T13:09:23+01:00
draft: false
type: posts
---

## Подзаголовок

### Подподзаголовок

#### Подподподзаголовок

##### Подподподподзаголовок

###### Подподподподзаголовок

Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Maecenas rutrum, eros quis suscipit malesuada, tortor est lacinia dolor, ac lobortis purus nibh ut est. Sed ultrices, mi vel rutrum dapibus, orci tellus vestibulum dolor, non iaculis nunc nisi id nunc. Donec in efficitur lorem. Suspendisse eros diam, tempus id lacinia at, rhoncus sit amet tortor. Phasellus in erat at massa hendrerit viverra. Curabitur gravida purus et est venenatis volutpat. Fusce ultricies metus sed lacinia aliquet. Nam ut euismod ligula, luctus porta sapien. Aenean in metus sed dolor mollis iaculis vitae nec mi. Vestibulum ultrices consequat vulputate. Ut at felis lorem.

## Подзаголовок 2

- номер 1
- номер 2
- номер 3
- номер 4
  - номер 5
  - номер 5
  - номер 5
  - номер 5
- номер 5


Lorem ipsum dolor sit amet, consectetur adipiscing elit. 

> Suspendisse condimentum elementum porta. Integer mattis feugiat diam, non convallis lacus congue cursus. 

Простая таблица

| Syntax      | Description |
| ----------- | ----------- |
| Header      | Title       |
| Paragraph   | Text        |

Таблица с выравниванием

| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |


First Term
: This is the definition of the first term.

Second Term
: This is one definition of the second term.
: This is another definition of the second term.

- [x] Write the press release
- [ ] Update the website
- [ ] Contact the media


Duis et viverra risus, vitae sollicitudin sapien. https://google.com Donec maximus dolor nec nisl pretium dignissim. Here's a simple footnote,[^1] and here's a longer one.[^bignote] Donec mattis urna quis felis fermentum, ac faucibus orci ultricies. Nulla iaculis enim tellus, a pretium purus vehicula commodo. Vestibulum id est vitae elit sollicitudin iaculis. {{% marginnote %}} А это заметка на полях! {{% /marginnote %}}

Aenean in nibh risus. Nunc tincidunt molestie eros ut ullamcorper. Donec eu imperdiet lacus, in scelerisque nisi. Maecenas sit amet dignissim ipsum. Mauris tristique neque in blandit dapibus. 

{{< codeblock id="sql-example" title="Пример SQL-кода" lang="sql" >}}
DROP TABLE IF EXISTS `logs`;

CREATE TABLE `logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `created_at` datetime NOT NULL,
  `message` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `idx_user_date` (`user_id`,`created_at`)
) ENGINE=InnoDB AUTO_INCREMENT=1001 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci; 
{{< /codeblock >}}

Suspendisse eget velit aliquam, tincidunt ligula non, imperdiet mauris. Integer ipsum massa, vulputate varius leo volutpat, iaculis facilisis libero. Duis ut mi quis arcu imperdiet venenatis. Ut efficitur ligula id aliquam suscipit. {{% marginnote %}}А это вторая заметка на полях! Она чуть-чуть длинее, чем предыдущая {{% /marginnote %}} 

Aenean in nibh risus. Nunc tincidunt molestie eros ut ullamcorper. Donec eu imperdiet lacus, in scelerisque nisi. Maecenas sit amet dignissim ipsum. Mauris tristique neque in blandit dapibus. 

[^1]: This is the first footnote.

[^bignote]: Here's one with multiple paragraphs and code.