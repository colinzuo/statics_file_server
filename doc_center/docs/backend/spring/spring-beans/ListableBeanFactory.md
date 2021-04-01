
- `boolean containsBeanDefinition(String beanName)`
- `int getBeanDefinitionCount()`
- `String[] getBeanDefinitionNames()`
- `<T> ObjectProvider<T> getBeanProvider(Class<T> requiredType, boolean allowEagerInit)`
- `<T> ObjectProvider<T> getBeanProvider(ResolvableType requiredType, boolean allowEagerInit)`
- `String[] getBeanNamesForType(ResolvableType type)`
- `String[] getBeanNamesForType(ResolvableType type, boolean includeNonSingletons, boolean allowEagerInit)`
- `String[] getBeanNamesForType(@Nullable Class<?> type)`
- `String[] getBeanNamesForType(@Nullable Class<?> type, boolean includeNonSingletons, boolean allowEagerInit)`
- `<T> Map<String, T> getBeansOfType(@Nullable Class<T> type)`
- `<T> Map<String, T> getBeansOfType(@Nullable Class<T> type, boolean includeNonSingletons, boolean allowEagerInit)`
- `String[] getBeanNamesForAnnotation(Class<? extends Annotation> annotationType)`
- `Map<String, Object> getBeansWithAnnotation(Class<? extends Annotation> annotationType)`
- `<A extends Annotation> A findAnnotationOnBean(String beanName, Class<A> annotationType)`