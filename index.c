#include <stdio.h>

int main()
{
	char chars[6] = "abcdef";

	int i;
	int j;
	int len = strlen(chars);
	for (i = 0; i < 6;i++) {
		for (j = 0; j < 6;j++) {
			printf("%c", chars[i]);
			printf("%c \n", chars[j]);
		}
	}


	return 0;
}

