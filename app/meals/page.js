import Link from "next/link";
import styles from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMeals } from "@/lib/meal";
import { Suspense } from "react";

const Meals = async () => {
  const mealsData = await getMeals();

  return <MealsGrid meals={mealsData} />;
};

const MealsPage = async () => {

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
        <Suspense
          fallback={<p className={styles.loading}>Fetching Meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;
