import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meal";

const MealsPage = async () => {
  const mealsData = await getMeals();
  return (
    <>
      <header className={styles.header}>
        <h1>
          Meals, created <span className={styles.highlight}>by you</span>
        </h1>
        <p>Choose your favorite recipe!</p>
        <p className={styles.cta}>
          <Link href="/meals/share">Add your own meal!</Link>
        </p>
      </header>
      <main className={styles.main}>
        <MealsGrid meals={mealsData} />
      </main>
    </>
  );
};

export default MealsPage;
