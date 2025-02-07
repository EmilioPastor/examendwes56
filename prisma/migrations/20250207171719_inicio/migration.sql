-- CreateTable
CREATE TABLE `repartidores` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `telefono` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pedidos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `fecha_hora` DATETIME(3) NOT NULL,
    `nombre_cliente` VARCHAR(191) NOT NULL,
    `direccion_cliente` VARCHAR(191) NOT NULL,
    `repartidorId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pizzas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nombre` VARCHAR(191) NOT NULL,
    `precio` DOUBLE NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_PedidoToPizza` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_PedidoToPizza_AB_unique`(`A`, `B`),
    INDEX `_PedidoToPizza_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `pedidos` ADD CONSTRAINT `pedidos_repartidorId_fkey` FOREIGN KEY (`repartidorId`) REFERENCES `repartidores`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PedidoToPizza` ADD CONSTRAINT `_PedidoToPizza_A_fkey` FOREIGN KEY (`A`) REFERENCES `pedidos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_PedidoToPizza` ADD CONSTRAINT `_PedidoToPizza_B_fkey` FOREIGN KEY (`B`) REFERENCES `pizzas`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
