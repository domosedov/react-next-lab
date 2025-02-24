"use client";

import { useRef, useState } from "react";
import { Drawer } from "vaul";
import { cx } from "./shared/ui/cva";

type Props = {
  classNames?: {
    content?: string;
  };
};

export default function VaulDrawer({ classNames }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Drawer.Root open={isOpen} onOpenChange={setIsOpen}>
      <Drawer.Trigger className="p-2 rounded border">
        Open Drawer
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className={cx(
            "bg-gray-100  flex flex-col fixed bottom-0 left-0 right-0 outline-none",
            classNames?.content
          )}
        >
          <Drawer.Title className="sr-only">Title</Drawer.Title>
          <Drawer.Description className="sr-only">
            Description
          </Drawer.Description>
          <div className="p-4 bg-white overflow-y-auto flex-1">
            <p>
              Далеко-далеко за словесными горами в стране гласных и согласных,
              живут рыбные тексты. Реторический, инициал пояс! Рыбного оксмокс
              прямо меня решила свое это обеспечивает инициал щеке ему текста
              пор свою большого по всей, послушавшись запятых что! Вскоре
              рыбными себя текстами свой свое подзаголовок рыбного, щеке даже
              ручеек путь моей инициал, всеми но по всей мир.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
              nesciunt doloremque saepe, fuga, asperiores blanditiis recusandae
              harum nulla esse omnis officiis laborum amet explicabo similique
              nostrum ex voluptates error mollitia? Consectetur enim vero, autem
              repellendus magni, fuga iure ad unde, maiores aliquid possimus
              deserunt sunt tempore harum? Facilis, reiciendis accusamus alias
              quaerat vel illo eius ducimus. Delectus accusamus a labore
              eveniet. Sed ducimus odio a, quisquam dolorum voluptas nobis
              aperiam corrupti non. Doloremque nulla repellendus est aperiam
              fugiat? Sapiente sint, excepturi nostrum corrupti in sed dicta
              maxime, cumque voluptatibus quae corporis voluptas. Error nobis
              amet voluptatibus inventore provident minus dolores qui optio a?
              Fuga, veritatis. Dolore itaque, mollitia in consequatur ab earum
              ut obcaecati praesentium unde. Ab sint obcaecati sit commodi
              aliquid aut, dicta perferendis fugit maxime expedita cum cumque,
              veniam repellat, consectetur ex veritatis quod temporibus.
              Doloremque labore maxime, quae ducimus earum consectetur.
              Asperiores voluptas saepe, illo animi nesciunt ab tenetur!
              Blanditiis quibusdam necessitatibus alias sequi ex eaque tempore?
              Cumque, numquam exercitationem maxime quasi ullam deleniti soluta
              aut doloremque? Quibusdam ipsum ut, obcaecati quas eius laboriosam
              nemo magnam nobis tempora, pariatur, dicta quaerat tenetur nam.
              Sint incidunt perspiciatis natus harum consequuntur impedit
              reiciendis totam, eveniet possimus. Laboriosam, quos iste.
            </p>
            <input ref={inputRef} type="text" className="p-2 rounded border" />
            <p>
              Далеко-далеко за словесными горами в стране гласных и согласных,
              живут рыбные тексты. Предложения переписали домах маленькая текст,
              толку рыбного предупреждал своего гор выйти! Свое рукопись
              подпоясал силуэт своего. Пояс текста страна коварный живет большой
              обеспечивает деревни использовало, которой они что эта все
              пунктуация курсивных выйти. Толку назад точках своих это речью
              безорфографичный рекламных жаренные домах вопрос семантика если
              даль, всемогущая дал образ дороге прямо, залетают путь. Сих
              пунктуация текст океана! Одна, дал власти сих, алфавит строчка
              парадигматическая переулка родного встретил инициал если снова.
              Последний гор текстами взобравшись послушавшись осталось пояс свое
              рукопись рыбными океана, она правилами, буквенных первую,
              предложения всемогущая по всей единственное.
            </p>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
