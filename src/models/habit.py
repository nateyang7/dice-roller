import os
import json


class Habit:
    """
    Représente une habitude

    Attributes:
        __name (str): Nom de l'habitude
        __historic (dict): Historique des dates complétées sur une semaine.
    """
    DAYS: list[str] = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
    UNDONE, DONE = "\u274c", "\u2713"

    def __init__(self, name: str) -> None:
        """
        Initialise une habitude.

        Args:
            name (str): Nom à donner à l'habitude.

        Returns:
            None.
        """
        self.__name: str = name
        self.__historic: dict[str, str] = {day: self.UNDONE for day in self.DAYS}
        self.save_json()

    def save_json(self) -> None:
        """
        Sauvegarde/Met à jour l'habitude dans un fichier JSON.

        Returns:
            None.
        """
        filename: str = ''.join(char if char != ' ' else '-' for char in self.__name).lower()
        with open(f"{filename}.json", 'w', encoding="utf-8") as f:
            json.dump(self.__historic, f, indent=4, ensure_ascii=False)

    def habit_check(self) -> None:
        """
        Coche/Décoche le jour où une habitude a été faite.

        Returns:
            None.
        """
        # Affiche les jours avec leur numéro de sélection
        for i, day in enumerate(self.DAYS):
            print(f"{i} - {day}")
        user_resp: int = int(input("Type the number of the day: "))
        self.__historic[self.DAYS[user_resp]] = self.DONE if self.__historic[self.DAYS[user_resp]] == self.UNDONE else self.UNDONE
        self.save_json()
        # !!! Gérer les exceptions plus tard !!! 

    def display_historic(self) -> None:
        """
        Affiche l'historique de l'habitude.

        Returns:
            None.
        """
        print(f"=== Habit : {self.__name} ===")
        for day, completion in self.__historic.items():
            print(f"{day} => {completion}")


if __name__ == "__main__":
    TEST_HABIT = Habit("Read a book")
    TEST_HABIT.display_historic()
    #TEST_HABIT.habit_check()
    #TEST_HABIT.display_historic()

    print("All tests passed!") 

