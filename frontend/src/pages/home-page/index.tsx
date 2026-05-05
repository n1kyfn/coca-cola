import styles from "./index.module.scss";

export function HomePage() {
  return (
    <div className={styles.homePage}>
      <h1>Добро пожаловать</h1>

      <h2>Популярные места:</h2>
      <div className={styles.homePage__popular}>
        <div className={styles.homePage__card}>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum consequatur, obcaecati nulla pariatur autem quos magnam sit quidem maiores quas quam corporis nemo aspernatur cum adipisci consequuntur distinctio, sapiente excepturi.</p>
        </div>

        <div className={styles.homePage__card}>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque fuga fugit vero modi? Perferendis praesentium laboriosam saepe maxime recusandae natus, dicta voluptatum quibusdam labore sequi deserunt repellendus vitae, ad vero.</p>
        </div>

        <div className={styles.homePage__card}>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Omnis nihil cupiditate, alias tempore nisi corrupti laudantium quibusdam repellendus veniam aut sapiente excepturi quas, eos ipsum natus quasi atque dignissimos eligendi.</p>
        </div>
      </div>

      <h2>Почему именно мы:</h2>
      <div className={styles.homePage__reviews}>
        <div className={styles.homePage__card}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid dolore reiciendis minus animi dolorem, eveniet perspiciatis, molestiae molestias doloremque impedit voluptas ipsam voluptates dolorum aliquam delectus deserunt a fugit incidunt?</p>
        </div>

        <div className={styles.homePage__card}>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum beatae sequi nostrum iste cupiditate minus debitis incidunt accusantium rerum quidem repudiandae accusamus delectus veritatis numquam aperiam rem iure, impedit sed?</p>
        </div>

        <div className={styles.homePage__card}>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident quas nesciunt et illo minima. Veniam aut nam totam enim! Laboriosam officiis placeat accusamus libero incidunt iusto maxime fugit doloremque dolore.</p>
        </div>
      </div>
    </div>
  );
}
