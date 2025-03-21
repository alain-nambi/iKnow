import threading
import time
import psutil

def task(name):
    for i in range(10):
        print(f"{name} est en cours... {i}")
        time.sleep(1)

# Mesurer le temps de début
start_time = time.time()

# Création de deux threads
thread1 = threading.Thread(target=task, args=("Thread 1",))
thread2 = threading.Thread(target=task, args=("Thread 2",))

# Démarrage des threads
thread1.start()
thread2.start()

# Attendre que les threads se terminent
thread1.join()
thread2.join()

# Calcul du temps écoulé
end_time = time.time()
elapsed_time = end_time - start_time

# Mesurer l'utilisation des ressources
process = psutil.Process()
cpu_usage = process.cpu_percent(interval=1)
memory_usage = process.memory_info().rss / (1024 * 1024)

print(f"Temps total d'exécution : {elapsed_time:.2f} secondes")
print(f"Utilisation CPU : {cpu_usage}%")
print(f"Utilisation RAM : {memory_usage:.2f} Mo")
