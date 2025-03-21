import time
import psutil  # Pour mesurer les ressources système

def task(name):
    for i in range(10):  # Augmenter le nombre d'itérations
        print(f"{name} est en cours... {i}")
        time.sleep(1)

# Mesurer le temps de début
start_time = time.time()

# Exécution séquentielle
task("Task 1")
task("Task 2")

# Calcul du temps écoulé
end_time = time.time()
elapsed_time = end_time - start_time

# Mesurer l'utilisation des ressources
process = psutil.Process()
cpu_usage = process.cpu_percent(interval=1)
memory_usage = process.memory_info().rss / (1024 * 1024)  # Convertir en Mo

print(f"Temps total d'exécution : {elapsed_time:.2f} secondes")
print(f"Utilisation CPU : {cpu_usage}%")
print(f"Utilisation RAM : {memory_usage:.2f} Mo")
