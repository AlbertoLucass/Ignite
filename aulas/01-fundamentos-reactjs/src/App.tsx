import { Header } from "./components/Header/Header";
import { Sidebar } from "./components/Sidebar/Sidebar";
import styles from "./App.module.css";
import "./global.css";
import { Post, PostType } from "./components/Post/Post";

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/AlbertoLucass.png",
      name: "Alberto Lucas",
      role: "Desenvolvedor Frontend",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-03-03 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/AlbertoLucass.png",
      name: "Alberto Lucas",
      role: "Desenvolvedor Frontend",
    },
    content: [
      {
        type: "paragraph",
        content: "Fala galeraa 👋",
      },
      {
        type: "paragraph",
        content:
          "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀",
      },
      {
        type: "link",
        content: "👉 jane.design/doctorcare",
      },
    ],
    publishedAt: new Date("2023-02-25 20:00:00"),
  },
];

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((post) => {
            return <Post key={post.id} post={post} />;
          })}
        </main>
      </div>
    </div>
  );
}

export default App;
